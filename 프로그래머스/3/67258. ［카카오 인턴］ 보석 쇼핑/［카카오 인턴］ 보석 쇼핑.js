function solution(gems) {
    var answer = [1,100000];
    const size=new Set(gems).size;
    const map=new Map();
    gems.forEach((gem,idx)=>{
        map.delete(gem);
        map.set(gem,idx+1);
        if(map.size===size){
            const [min,max]=[map.values().next().value,idx+1];
            if(answer[1]-answer[0]>max-min){
                answer=[min,max];
            }
        }
    })
    return answer;
}