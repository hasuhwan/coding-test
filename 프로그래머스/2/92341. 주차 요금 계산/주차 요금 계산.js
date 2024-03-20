function solution(fees, records) {
    var answer = [];
    const MAX_MINUTE=23*60+59;
    const [defaultT,defaultF,perM,perF]=fees;
    const map=new Map();
    records.map(str=>{
        const split=str.split(" ");
        const minute=split[0].split(":").reduce((acc,cur,idx)=>{
            if(idx===0){
                return acc+Number(cur)*60
            }
            return acc+Number(cur);
        },0);
        const number=Number(split[1]);
        return [minute,number];
    }).sort((a,b)=>a[1]-b[1]).forEach(([minute,number])=>{
        if(!map.has(number)){
            map.set(number,[]);
        }
        map.get(number).push(minute);
    });
    for(let arr of map.values()){
        let total=0;
        for(let i=0; i<arr.length; i+=2){
            if(arr[i+1]!==undefined){
                total+=arr[i+1]-arr[i];
            }else{
                total+=MAX_MINUTE-arr[i];
            }
        }
        let totalFee=defaultF;
        if(total>defaultT){
            totalFee+=Math.ceil((total-defaultT)/perM)*perF;
        }
        answer.push(totalFee);
    }
    
    return answer;
}