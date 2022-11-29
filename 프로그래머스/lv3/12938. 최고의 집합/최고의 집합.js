function solution(n, s) {
  let arr = new Array(n).fill(Math.ceil(s / n));
  let answer = arr.reduce((acc, cur) => acc + cur, 0);
  if (n > s) {
    return [-1];
  }
  while (answer !== s) {
    for (let i = 0; i < arr.length; i++) {
      if (answer === s) {
        return arr;
      } else {
        arr[i]--;
        answer--;
      }
    }
  }
  return arr;
}