function solution(i, j, k) {
    var answer = 0;
    for(let idx=i; idx<=j; idx++){
        answer+=String(idx).split("").map(str=>Number(str)).filter(el=>el===k).length;
    }
    return answer;
}