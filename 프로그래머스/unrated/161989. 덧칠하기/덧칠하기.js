function solution(n, m, section) {
  var answer = 1;
  let temp = section[0] + m - 1;
  for (let i = 0; i < section.length; i++) {
    if (section[i] > temp) {
      answer++;
      temp = section[i] + m - 1;
    }
  }
  return answer;
}