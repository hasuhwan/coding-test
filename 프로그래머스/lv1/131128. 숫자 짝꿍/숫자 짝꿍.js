function solution(X, Y) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < X.length; i++) {
    if (obj[X[i]] === undefined) {
      obj[X[i]] = 1;
    } else {
      obj[X[i]]++;
    }
  }
  for (let i = 0; i < Y.length; i++) {
    if (obj[Y[i]] !== undefined && obj[Y[i]] !== 0) {
      obj[Y[i]]--;
      answer.push(Y[i]);
    }
  }
  return answer.length === 0
    ? "-1"
    : answer.every((el) => el === "0")
    ? "0"
    : answer.sort((a, b) => b - a).join("");
}