function solution(record) {
    var answer = [];
    const map=new Map();
    record.forEach(str=>{
        const [doing,id,nick]=str.split(" ");
        if(doing==="Enter"||doing==="Change"){
            map.delete(id);
            map.set(id,nick);
        }
    });
    record.forEach(str=>{
        const [doing,id,nick]=str.split(" ");
        if(doing==="Enter"){
            answer.push(`${map.get(id)}님이 들어왔습니다.`);
        }else if(doing==="Leave"){
            answer.push(`${map.get(id)}님이 나갔습니다.`);
        }
    })
    return answer;
}