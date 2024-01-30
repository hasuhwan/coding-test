function solution(start, end_num) {
    return new Array(start-end_num+1).fill().map(()=>start--);
}