function solution(answers) {
  const personOne = [1, 2, 3, 4, 5];
  const personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;
  for (i = 0; i < length; i++) {
    if (personOne[i % 5] === answers[i]) {
      result[0]++;
    }
    if (personTwo[i % 8] === answers[i]) {
      result[1]++;
    }
    if (personThree[i % 10] === answers[i]) {
      result[2]++;
    }
  }
  const maxValue = Math.max(...result);
  var answer = [];
  for (i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}