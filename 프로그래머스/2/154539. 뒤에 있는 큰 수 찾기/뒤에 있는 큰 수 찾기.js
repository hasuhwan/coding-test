function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    const stack=[];
    numbers.forEach((num,idx)=>{
        while(stack.length!==0&&numbers[stack[stack.length-1]]<num){
            answer[stack.pop()]=num;
        }
        stack.push(idx);
    })
    return answer;
}