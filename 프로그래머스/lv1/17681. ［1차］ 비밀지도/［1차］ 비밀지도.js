function solution(n, arr1, arr2) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2);
    arr2[i] = arr2[i].toString(2);
    answer[i] = (Number(arr1[i]) + Number(arr2[i]) + "").padStart(n, 0);
    answer[i] = answer[i].replace(/[^0]/g, "#").replace(/0/g, " ");
  }
  return answer;
}