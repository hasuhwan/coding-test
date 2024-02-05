function solution(myString, pat) {
    const len=pat.length;
    var answer = 0;
    let temp="";
    for(let i=0; i<=myString.length; i++){
        if(temp.length<len){
            temp+=myString[i];
        }else{
            temp=temp.slice(1)+myString[i];
        }
        
        if(temp===pat){
            answer++;
        }
    }
    return answer;
}