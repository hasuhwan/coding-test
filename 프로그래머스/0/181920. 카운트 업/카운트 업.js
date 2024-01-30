function solution(start_num, end_num) {

    return new Array(51).fill().map((_,idx)=>idx).slice(start_num,end_num+1);
}