function solution(s){
    var answer = true;
    const stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]===")"){
            if(stack[stack.length-1]==="("){
            stack.pop();    
            }else{
                return false;
            }
            
        }else{
            stack.push(s[i]);
        }
    }

    return stack.length===0;
}