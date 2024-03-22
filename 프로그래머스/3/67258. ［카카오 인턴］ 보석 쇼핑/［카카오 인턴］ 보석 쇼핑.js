function solution(gems) {
    var answer = [1,gems.length];
    let length=Infinity;
    const set=new Set(gems);
    const map=new Map();
    let start=0;
    gems.forEach((gem,idx)=>{
        map.set(gem,(map.get(gem)||0)+1);
        while(map.size===set.size){
            const del=gems[start];
            const count=map.get(del);
            if(count===1){
                map.delete(del);
                const diff=idx-start;
                if(diff<length){
                    length=diff;
                    answer=[start+1,idx+1];
                }
            }else{
                    map.set(del,count-1);
                }
            start++;
        }
    })
    return answer;
}