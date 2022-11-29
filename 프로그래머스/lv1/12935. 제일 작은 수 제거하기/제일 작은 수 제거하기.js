function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<=1){
        arr[0]=-1;
    }
    return arr;
}