function solution(record) {
    var answer = [];
    const order=[];
    const map=new Map();
    record.forEach((str)=>{
        const [o,id,nick]=str.split(" ");
        if(o==="Enter"||o==="Leave"){
            order.push([o,id]);
        }
        if(o!=="Leave"){
            map.set(id,nick);
        }
    });
    order.forEach(([o,id])=>{
        if(o==="Enter"){
            answer.push(`${map.get(id)}님이 들어왔습니다.`);
        }else{
            answer.push(`${map.get(id)}님이 나갔습니다.`);
        }
    })
    return answer;
}