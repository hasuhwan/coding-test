function solution(t, p) {
  var answer = 0;
  const arr = t.split("");
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const str = arr.slice(i, i + p.length).join("");
    if (Number(str) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}