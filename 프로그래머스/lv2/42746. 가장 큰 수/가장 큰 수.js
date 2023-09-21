function solution(numbers) {
    const answer=numbers.map((num)=>String(num)).sort((a,b)=>Number(b+a)-Number(a+b)).join("");
    return answer[0]==="0"?"0":answer;
}