function solution(brown, yellow) {
  var answer = [];
  for (let i = yellow; i > 0; i--) {
    if (yellow % i === 0) {
      const col = i;
      const row = yellow / i;
      const brownArr = (col + 2 + row) * 2;
      if (brownArr === brown) {
        answer = [col + 2, row + 2];
        return answer;
      }
    }
  }
}