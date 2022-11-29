function solution(k, m, score) {
  var answer = 0;
  const sorted = score.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    const arr = sorted.slice(m * i, m * (i + 1));
    if (arr.length === m) {
      answer += arr[m - 1] * m;
    }
  }
  return answer;
}