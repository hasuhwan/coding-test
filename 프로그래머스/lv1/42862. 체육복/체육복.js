function solution(n, lost, reserve) {
  let arr = new Array(n).fill(1);
  for (let i = 0; i < lost.length; i++) {
    arr[lost[i] - 1] -= 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    arr[reserve[i] - 1] += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (arr[i - 1] === 2) {
        arr[i - 1] -= 1;
        arr[i] = 1;
      } else if (arr[i + 1] === 2) {
        arr[i + 1] -= 1;
        arr[i] = 1;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }
  const answer = arr.reduce((acc, cur) => {
    if (cur >= 1) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return answer;
}