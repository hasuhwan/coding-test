function solution(hp) {
    var answer = 0;
    let temp=5;
    while(hp!==0){
        answer+=Math.floor(hp/temp);
        hp=hp%temp;
        temp-=2;
        
    }
    return answer;
}