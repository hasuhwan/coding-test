function solution(fees, records) {
    var answer = [];
    const [basicM,basicC,perM,perC]=fees;
    const obj={};
    records=records.map(el=>{
        const [timeH,num,type]=el.split(" ");
        const timeM=timeH.split(":").reduce((acc,cur,idx)=>{
           if(idx===0){
               return Number(cur)*60;
           } else{
               return acc+Number(cur);
           }
        },0);
        if(!obj[num]){
            obj[num]={IN:[],OUT:[]};
        }
        obj[num][type].push(timeM);
    })
for(let key in obj){
    if(obj[key].IN.length!==obj[key].OUT.length){
        obj[key].OUT.push(24*60-1);
    }
     const totalM=obj[key].OUT.reduce((acc,cur)=>acc+cur,0)-obj[key].IN.reduce((acc,cur)=>acc+cur,0);
    if(totalM<=basicM){
        answer.push([basicC,Number(key)]);
    }else{
    const totalC=basicC+Math.ceil((totalM-basicM)/perM)*perC;
        answer.push([totalC,Number(key)]);
    }
    
}
    return answer.sort((a,b)=>a[1]-b[1]).map(el=>el[0]);
}