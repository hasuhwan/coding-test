function solution(record) {
    var answer = [];
    const obj={};
    record=record.map(el=>el.split(" "));
    record.forEach(el=>{
if(el[0]==="Enter"||el[0]==="Change"){
        obj[el[1]]=el[2];
}
    
    })
record.forEach(el=>{
    const [command,user]=el;
    if(command==="Enter"){
        answer.push(`${obj[user]}님이 들어왔습니다.`);
    }else if(command==="Leave"){
        answer.push(`${obj[user]}님이 나갔습니다.`);
    }
})
    return answer;
}