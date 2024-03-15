function solution(s) {
    let answer=0;
    const n=s.length;
    const obj={
        "}":"{",
        "]":"[",
        ")":"(",
    }
    outer:for(let i=0; i<n; i++){
        const str=s.slice(i)+s.slice(0,i);
        const stack=[];
        for(let char of str){
            if(!obj[char]){
                stack.push(char);
            }else{
                if(stack.length===0||stack[stack.length-1]!==obj[char]){
                    continue outer;
                }
                stack.pop();
            }
        }
        if(stack.length===0){
            answer++;
        }
    }
    return answer;
}