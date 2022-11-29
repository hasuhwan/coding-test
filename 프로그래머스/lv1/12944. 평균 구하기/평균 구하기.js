function solution(arr) {
    var answer = 0;
    answer=arr.reduce((acc,cal)=>acc+cal,0)/arr.length;
    return answer;
}