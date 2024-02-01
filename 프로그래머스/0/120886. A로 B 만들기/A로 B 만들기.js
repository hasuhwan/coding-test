function solution(before, after) {
   const map=new Map();
    for(let char of before){
        map.set(char,(map.get(char)||0)+1);
    }
    for(let char of after){
        if(!map.has(char)){
            return 0;
        }
        const count=map.get(char);
        if(count===1){
            map.delete(char);
        }else{
            map.set(char,count-1);
        }
    }
    return 1;
}