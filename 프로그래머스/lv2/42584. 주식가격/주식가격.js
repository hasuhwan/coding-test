function solution(prices) {
    var answer = new Array(prices.length).fill(0).map((_,idx)=>prices.length-1-idx);
    const stack=[];
    prices.forEach((val,idx)=>{
        if(stack.length!==0&&prices[stack[stack.length-1]]>val){
            while(prices[stack[stack.length-1]]>val){
                const temp=stack.pop();
                answer[temp]=idx-temp;
            }
            
        }
        stack.push(idx);
    })
    console.log(stack);
    return answer;
}