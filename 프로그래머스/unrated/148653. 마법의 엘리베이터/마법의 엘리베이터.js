function solution(storey) {
  var answer = 0;
  const strStorey = String(storey)
    .split("")
    .map((el) => Number(el));
  for (let i = strStorey.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (strStorey[i] <= 5) {
        answer += strStorey[i];
      } else {
        answer += 11 - strStorey[i];
      }
      return answer;
    }
    if (strStorey[i] < 5) {
      answer += strStorey[i];
    } else if (strStorey[i] > 5) {
      answer += 10 - strStorey[i];
      strStorey[i - 1] += 1;
    } else {
      if (strStorey[i - 1] >= 5) {
        answer += strStorey[i];
        strStorey[i - 1] += 1;
      } else {
        answer += 10 - strStorey[i];
      }
    }
  }
  return answer;
}