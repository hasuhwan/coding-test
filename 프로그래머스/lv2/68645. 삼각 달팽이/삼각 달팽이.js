function solution(n) {
  let count = 1;
  let time = 1;
  let answer = new Array(n).fill(0).map((_, i) => new Array(i + 1).fill(null));
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += i;
  }
  while (count <= number) {
    for (let i = time - 1; i < n - time; i++) {
      const temp = answer[i].indexOf(null);
      if (temp !== -1) {
        answer[i][temp] = count;
        count++;
      }
    }
    for (let i = 0; i < answer[n - time].length; i++) {
      if (answer[n - time][i] === null) {
        answer[n - time][i] = count;
        count++;
      }
    }
    for (let i = n - time - 1; i > time - 1; i--) {
      const temp = answer[i].lastIndexOf(null);
      if (temp !== -1) {
        answer[i][temp] = count;
        count++;
      }
    }
    time++;
  }
  return answer.flat();
}