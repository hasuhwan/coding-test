function solution(k, d) {
    var answer = 0;
    for(let i=0; i<=d; i+=k){
        const temp=Math.floor(Math.sqrt(Math.pow(d,2)-Math.pow(i,2)));
        answer+=Math.floor(temp/k+1);
        
    }
    return answer;
}