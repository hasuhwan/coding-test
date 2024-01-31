function solution(order) {
    let answer=0;
    const set=new Set(["3","6","9"]);
    String(order).split("").forEach(el=>{
        if(set.has(el)){
            answer++;
        }
    });
    return answer;
}