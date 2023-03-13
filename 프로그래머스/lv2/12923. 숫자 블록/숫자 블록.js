function solution(begin, end) {
  const answer = [];
  function divisorFunc(temp) {
    let num = 1;
    for (let i = 2; i <= Math.sqrt(temp); i++) {
      if (temp % i === 0 && temp / i <= 10000000) {
        return temp / i;
      } else if (temp % i === 0) {
        num = i;
      }
    }
    return num;
  }
  if (begin === 1) {
    answer.push(0);
    begin += 1;
  }
  for (let i = begin; i <= end; i++) {
    answer.push(divisorFunc(i));
  }
  return answer;
}