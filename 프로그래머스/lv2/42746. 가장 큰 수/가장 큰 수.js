function solution(numbers) {
  var answer = "";
  numbers = numbers.map((a) => a + "").sort((a, b) => b + a - (a + b));
  answer = numbers.join("");
  if (answer[0] === "0") {
    answer = "0";
  }
  return answer;
}
