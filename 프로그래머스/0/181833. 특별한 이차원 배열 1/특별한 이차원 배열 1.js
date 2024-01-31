function solution(n) {
    const answer=new Array(n).fill().map(()=>new Array(n).fill(0));
    let i=0;
    while(i<n){
        answer[i][i]=1;
        i++;
    }
    return answer;
}