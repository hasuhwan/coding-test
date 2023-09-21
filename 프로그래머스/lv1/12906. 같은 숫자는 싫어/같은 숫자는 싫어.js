function solution(arr)
{
    var answer = []; 
    arr.forEach(num=>{
        if(answer.length===0||answer[answer.length-1]!==num){
            answer.push(num);
        }
    })
    return answer;
}