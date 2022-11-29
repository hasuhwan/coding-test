function solution(a, b, n) {
  var answer = 0;
  let empty = n;
  while (empty >= a) {
    answer += parseInt(empty / a) * b;
    empty = parseInt(empty % a) + parseInt(empty / a) * b;
  }
  return answer;
}