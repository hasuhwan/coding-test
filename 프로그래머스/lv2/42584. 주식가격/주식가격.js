function solution(prices) {
    const len=prices.length;
    const answer=new Array(len).fill(0);
    const stack=[];
    for(let i=0; i<len; i++){
        while(stack.length!==0 && prices[i]<prices[stack[stack.length-1]]){
            const temp=stack.pop();
            answer[temp]=i-temp;
        }
        stack.push(i);
    }
    for(let i=0; i<stack.length; i++){
        const temp=stack[i];
        answer[temp]=prices.length-1-temp;
    }
    return answer;
}