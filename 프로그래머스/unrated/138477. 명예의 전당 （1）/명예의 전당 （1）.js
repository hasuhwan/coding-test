function solution(k, score) {
  var answer = [];
  const arr = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    if (arr.length > k) {
      const index = arr.indexOf(Math.min(...arr));
      arr.splice(index, 1);
    }
    answer.push(Math.min(...arr));
  }
  return answer;
}