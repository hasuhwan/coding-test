function solution(n, t, m, p) {
  var answer = "";
  let str = "";
  let count = 0;
  while (answer.length !== t) {
    str += count.toString(n);
    if (count % m === p - 1) {
      answer += str[count];
    }
    count++;
  }
  return answer.toUpperCase();
}