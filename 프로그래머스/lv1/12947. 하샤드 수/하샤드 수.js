function solution(x) {
  var answer = true;
  if (
    x %
      String(x)
        .split("")
        .map((number) => parseInt(number))
        .reduce((pre, cur) => pre + cur, 0) !==
    0
  ) {
    answer = false;
  }
  return answer;
}
