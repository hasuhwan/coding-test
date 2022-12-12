function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    const head = s.slice(0, i);
    const index = head.lastIndexOf(s[i]);
    if (index === -1) {
      answer.push(index);
    } else {
      answer.push(head.length - index);
    }
  }
  return answer;
}