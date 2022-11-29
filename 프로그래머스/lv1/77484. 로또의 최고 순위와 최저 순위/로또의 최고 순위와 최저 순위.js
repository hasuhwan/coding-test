function solution(lottos, win_nums) {
  var answer = [];
  const correct = lottos.filter((num) => win_nums.includes(num)).length;
  const zero = lottos.filter((num) => num === 0).length;

  const min = 7 - correct >= 6 ? 6 : 7 - correct;
  const max = min - zero < 1 ? 1 : min - zero;
  answer = [max, min];
  return answer;
}
