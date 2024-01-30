function solution(my_string) {
    return my_string.split("").reduce((acc,cur)=>{
        if(isNaN(cur)){
            return acc;
        }
        return acc+Number(cur);
    },0);
}