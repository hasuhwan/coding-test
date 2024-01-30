function solution(n, t) {
    const arr=new Array(t+1).fill(0);
    arr[0]=n;
    for(let i=1; i<arr.length; i++){
        arr[i]=arr[i-1]*2;
    }
    return arr[arr.length-1];
}