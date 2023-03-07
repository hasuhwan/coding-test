function solution(weights) {
  let answer = 0;
  const obj = {};
  weights.sort((a, b) => a - b);
  const cal = [1, 3 / 2, 4 / 3, 2];
  for (let i = 0; i < weights.length; i++) {
    if (obj[weights[i]] === undefined) {
      obj[weights[i]] = 1;
    } else {
      obj[weights[i]]++;
    }
  }
  for (let i = 0; i < weights.length; i++) {
    const temp = weights[i];
    for (let j = 0; j < cal.length; j++) {
      if (obj[temp * cal[j]] !== undefined) {
        if (temp * cal[j] === temp) {
          obj[temp * cal[j]] -= 1;
        }
        answer += obj[temp * cal[j]];
        if (obj[temp * cal[j]] === 0) {
          obj[temp * cal[j]] = undefined;
        }
      }
    }
  }
  return answer;
}