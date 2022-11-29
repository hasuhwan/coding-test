function solution(people, limit) {
  var answer = 0;
  const arr = people.sort((a, b) => b - a);
  let i = 0;
  let l = arr.length - 1;
  while (i < l) {
    if (arr[i] + arr[l] > limit) {
      i++;
      answer++;
    } else if (arr[i] + arr[l] <= limit) {
      i++;
      l--;
      answer++;
    }
    if (i === l) {
      answer++;
      break;
    }
  }
  return answer;
}