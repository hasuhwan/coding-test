function solution(progresses, speeds) {
    var answer = [];
    let idx=0;
    while(idx!==progresses.length){
        let available=0;
        let temp=idx;
        const val=Math.ceil((100-progresses[temp])/speeds[temp]);
        while(val>=Math.ceil((100-progresses[temp])/speeds[temp])){
            available++;
            temp++;
        }
        answer.push(available);
        idx=temp;
    }
    return answer;
}