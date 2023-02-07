function solution(arr1, arr2) {
  var answer = [];
  const m = arr1.length;
  const n = arr2[0].length;
  const o = arr2.length;
  for (let i = 0; i < m; i++) {
    let arr = new Array(n);
    for (let j = 0; j < n; j++) {
      let temp = 0;
      for (let k = 0; k < o; k++) {
        temp += arr1[i][k] * arr2[k][j];
      }
      arr[j] = temp;
    }
    answer.push(arr);
  }
  return answer;
}