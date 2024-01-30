function solution(n) {
    var answer = 0;
    const sqrt=Math.sqrt(n);
    for(let i=1; i<=sqrt; i++){
        if(n%i===0){
            if(i===sqrt){
                answer++;
            }else{
                answer+=2;
            }
        }
    }
    return answer;
}