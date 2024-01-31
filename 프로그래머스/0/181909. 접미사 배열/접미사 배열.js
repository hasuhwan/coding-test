function solution(my_string) {
    var answer = [];
    let temp="";
    for(let i=my_string.length-1; i>=0; i--){
        temp=my_string[i]+temp;
        answer.push(temp);
    }
    return answer.sort();
}