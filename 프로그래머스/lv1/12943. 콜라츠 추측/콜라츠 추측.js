function solution(num) {
  var answer = 0;
  while (num !== 1) {
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    if (answer === 500) {
      answer = -1;
      break;
    }
    answer++;
  }

  return answer;
}
