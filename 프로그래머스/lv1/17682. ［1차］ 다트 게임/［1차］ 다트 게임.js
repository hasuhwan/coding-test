function solution(dartResult) {
  var answer = [];
  let num = 0;
  const powObj = {
    S: 1,
    D: 2,
    T: 3,
  };
  const bonusObj = {
    "*": 2,
    "#": -1,
  };
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      !isNaN(dartResult[i - 1]) ? (num = 10) : (num = Number(dartResult[i]));
    } else if (powObj[dartResult[i]]) {
      answer.push(num ** powObj[dartResult[i]]);
    } else if (bonusObj[dartResult[i]]) {
      bonusObj[dartResult[i]] === -1
        ? (answer[answer.length - 1] *= -1)
        : ((answer[answer.length - 1] *= 2), (answer[answer.length - 2] *= 2));
    }
  }
  answer = answer.reduce((acc, cur) => acc + cur, 0);
  return answer;
}