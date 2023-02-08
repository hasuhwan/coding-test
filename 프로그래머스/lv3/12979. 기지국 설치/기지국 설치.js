function solution(n, stations, w) {
  var answer = 0;
  let start = 1;
  let i = 0;

  while (start <= n) {
    if (stations[i] - w <= start) {
      start = stations[i] + w + 1;
      i++;
    } else {
      start = start + 1 + 2 * w;
      answer++;
    }
  }

  return answer;
}