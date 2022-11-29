function solution(k, tangerine) {
  var answer = 0;
  let count = 0;
  const obj = {};
  for (let i = 0; i < tangerine.length; i++) {
    if (obj[tangerine[i]] === undefined) {
      obj[tangerine[i]] = 1;
    } else {
      obj[tangerine[i]]++;
    }
  }
  const sorted = Object.values(obj).sort((a, b) => b - a);
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    answer += sorted[i];
    count++;
    if (answer === k) {
      return count;
    } else if (answer > k) {
      return count;
    }
  }
  return count;
}