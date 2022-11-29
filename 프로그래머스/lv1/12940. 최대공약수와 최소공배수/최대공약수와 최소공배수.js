function solution(n, m) {
  var answer = [];
  const num = n > m ? n : m;
  for (let i = num; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }
  answer.push((n * m) / answer[0]);
  return answer;
}
