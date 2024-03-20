function solution(n, s) {
    const div=Math.floor(s/n);
    if(div===0){
        return [-1];
    }
    let mod=s%n;
    const answer=new Array(n).fill(div);
    for(let i=answer.length-1; i>answer.length-1-mod; i--){
        answer[i]+=1;
    }
    return answer;
}