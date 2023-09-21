function solution(progresses, speeds) {
    var answer = [];
    let max=0;
    let count=0;
    progresses.forEach((el,idx)=>{
        const days=Math.ceil((100-el)/speeds[idx]);
        if(max===0){
            count=1;
            max=days;
        }else if(max>=days){
            count++;
        }else{
            answer.push(count);
            max=days;
            count=1;
        }
    })
    answer.push(count);
    return answer;
}