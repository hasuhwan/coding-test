function solution(arr, idx) {
    const index=arr.slice(idx).indexOf(1);
    return index===-1?-1:index+idx;
}