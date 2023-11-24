function solution(queue1, queue2) {
    var answer = 0;
    const max=queue1.length*4;
    function sum(arr){
        return arr.reduce((acc,cur)=>acc+cur,0);
    }
    let sum1=sum(queue1);
    let sum2=sum(queue2);
    let idx1=0;
    let idx2=0;
    while(answer<max){
        if(sum1>sum2){
            const curr=queue1[idx1];
            sum1-=curr;
            sum2+=curr;
            queue2.push(curr);
            idx1++;
        }else if(sum1<sum2){
            const curr=queue2[idx2];
            sum1+=curr;
            sum2-=curr;
            queue1.push(curr);
            idx2++;
        }else{
            return answer;
        }
        answer++;
        
    }
    return -1;
}