function solution(k, d) {
  var answer = 0;
  const x = d / k;
  for (let i = 0; i <= Math.floor(x); i++) {
    const temp = Math.pow(x, 2) - Math.pow(i, 2);
    const b = Math.floor(Math.sqrt(temp));
    if (b === 0) {
      answer++;
    } else {
      answer += b + 1;
    }
  }
  return answer;
}