function solution(targets) {
  var answer = 1;
  targets.sort((a, b) => b[0] - a[0]);
  let start = targets[0][0];
  for (let i = 1; i < targets.length; i++) {
    const [tempS, tempE] = targets[i];
    if (tempE <= start) {
      answer++;
      start = tempS;
    }
  }
  return answer;
}