function solution(n) {
  var answer = 0;
  const arr = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  answer = parseInt(arr);
  return answer;
}
