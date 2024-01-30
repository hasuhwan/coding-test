function solution(rsp) {
    let answer="";
    const obj={
        "2":"0",
        "0":"5",
        "5":"2",
    };
    
    for(let key of rsp){
        answer+=obj[key];
    }
    return answer;
    
}