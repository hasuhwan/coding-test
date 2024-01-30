function solution(arr, n) {
    if(arr.length%2===0){
        return arr.map((num,idx)=>{
            return idx%2!==0?num+n:num;
        });
    }else{
        return arr.map((num,idx)=>{
            return idx%2===0?num+n:num;
        });
    }
}