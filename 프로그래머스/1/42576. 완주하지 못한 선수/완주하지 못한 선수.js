function solution(participant, completion) {
    const map=new Map();
    participant.forEach(str=>{
        map.set(str,(map.get(str)||0)+1);
    });
    completion.forEach(str=>{
        map.set(str,(map.get(str)||0)-1);
    });
    
    for(let [key,val] of map.entries()){
        if(val!==0){
            return key;
        }
    }
}