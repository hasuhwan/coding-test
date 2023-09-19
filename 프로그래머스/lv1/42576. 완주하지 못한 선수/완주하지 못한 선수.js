function solution(participant, completion) {
    const obj={};
    participant.forEach(str=>{
        obj[str]=(obj[str]||0)+1;
    });
    completion.forEach(str=>{
        obj[str]--;
    });
    for(let [key,value] of Object.entries(obj)){
        if(value!==0){
            return key;
        }
    }
}