function solution(my_string) {
    var answer = '';
    for(let char of my_string){
        if(char.charCodeAt()>=97){
            answer+=char.toUpperCase();
        }else{
            answer+=char.toLowerCase();
        }
    }
    return answer;
}