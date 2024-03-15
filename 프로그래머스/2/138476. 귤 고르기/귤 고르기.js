function solution(k, tangerine) {
    let answer=0;
    const map=new Map();
    tangerine.forEach(id=>{
        map.set(id,(map.get(id)||0)+1);
    });
    for(let value of [...map.values()].sort((a,b)=>b-a)){
        k-=value;
        answer++;
        if(k<=0){
            break;
        }
    }
    return answer;
}