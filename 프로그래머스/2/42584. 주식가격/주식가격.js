function solution(prices) {
    const answer=new Array(prices.length).fill(0);
    const stack=[];
    for(let i=0; i<prices.length; i++){
        const temp=prices[i];
        while(stack.length!==0&&prices[stack[stack.length-1]]>temp){
            const pop=stack.pop();
            answer[pop]=i-pop;
        }
        stack.push(i);
    }
    for(let idx of stack){
        answer[idx]=prices.length-1-idx;
    }
    return answer;
}