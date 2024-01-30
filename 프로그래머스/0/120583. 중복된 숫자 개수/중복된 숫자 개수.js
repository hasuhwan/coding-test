function solution(array, n) {
    return array.reduce((acc,cur)=>{
        if(cur===n){
            return acc+1;
        }else{
            return acc;
        }
    },0);
}