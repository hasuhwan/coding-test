function solution(arr, queries) {
    queries.forEach(([one,two])=>{
        [arr[one],arr[two]]=[arr[two],arr[one]];
    })
    return arr;
}