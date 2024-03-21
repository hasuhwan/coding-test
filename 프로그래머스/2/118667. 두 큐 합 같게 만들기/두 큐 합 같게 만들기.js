function solution(queue1, queue2) {
    var answer = 0;
    let sum1=queue1.reduce((acc,cur)=>acc+cur,0);
    let sum2=queue2.reduce((acc,cur)=>acc+cur,0);
    let idx1=0;
    let idx2=0;
    const totaln=queue1.length+queue2.length;
    
    while(sum1!==sum2){
        if(sum1>sum2){
            sum1-=queue1[idx1];
            queue2.push(queue1[idx1]);
            sum2+=queue1[idx1++];
        }else{
            sum2-=queue2[idx2];
            queue1.push(queue2[idx2]);
            sum1+=queue2[idx2++];
        }
        answer++;
        if(idx1>totaln||idx2>totaln){
            return -1;
        }
    }
    return answer;
}