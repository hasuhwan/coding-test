function solution(myString) {
    let answer="";
    for(let char of myString){
        if(char.charCodeAt()<108){
            answer+="l"
        }else{
            answer+=char;
        }
    }
    return answer;
}