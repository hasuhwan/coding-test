function solution(s) {
  var answer = true;
  const lS = s.toLowerCase().split("");
  const findP = lS.filter((unit) => unit === "p");
  const findY = lS.filter((unit) => unit === "y");
  if (findP.length === findY.length) {
    return answer;
  } else {
    return false;
  }
}
