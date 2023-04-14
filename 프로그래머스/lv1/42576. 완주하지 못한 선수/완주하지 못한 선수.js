function solution(participant, completion) {
    var answer = '';
    const obj={};
    participant.forEach(el=>{
        obj[el]=(obj[el]||0)+1;
    })
    completion.forEach(el=>{
        obj[el]-=1;
        if(obj[el]===0){
            delete obj[el];
        }
    })

    return Object.keys(obj)[0];
}