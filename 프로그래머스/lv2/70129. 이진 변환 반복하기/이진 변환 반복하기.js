function solution(s) {
  var answer = s.split("");
  let zeroCount = 0;
  let count = 0;

  while (answer.length !== 1) {
    answer = answer.filter((num) => {
      if (num === "0") {
        zeroCount++;
      } else {
        return num;
      }
    });
    answer = answer.length.toString(2).split("");
    count++;
  }
  return [count, zeroCount];
}