function solution(w, h) {
  var answer = 0;
  for (let i = 1; i < w; i++) {
    answer += Math.floor((h *i ) / w);
  }
  return 2 * answer;
}