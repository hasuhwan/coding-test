function solution(topping) {
    var answer = 0;
    const map=new Map();
    const set=new Set();
    topping.forEach(el=>{
        map.set(el,(map.get(el)||0)+1);
    });
    topping.forEach(el=>{
        set.add(el);
        const val=map.get(el);
        if(val===1){
            map.delete(el);
        }else{
            map.set(el,val-1);
        }
        if(set.size===map.size){
            answer++;
        }
    })
    
    return answer;
}