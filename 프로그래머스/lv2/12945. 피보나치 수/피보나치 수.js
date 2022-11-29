function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      answer.push(i);
    }
    if (i === 1) {
      answer.push(i);
    }
    if (i >= 2) {
      let sum = answer[i - 1] + answer[i - 2];
      answer.push(sum%1234567);
    }
  }

  return (answer[n]);
}