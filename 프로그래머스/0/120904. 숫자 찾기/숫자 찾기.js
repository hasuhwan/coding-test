function solution(num, k) {
    const idx=String(num).split("").map(str=>Number(str)).indexOf(k);
    return idx===-1?-1:idx+1;
}