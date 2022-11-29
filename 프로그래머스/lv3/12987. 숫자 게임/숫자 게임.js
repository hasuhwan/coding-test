function solution(A, B) {
  var answer = 0;
  let sortedA = A.sort((a, b) => a - b);
  let sortedB = B.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (sortedB.length !== i) {
    if (sortedB[i] > sortedA[j]) {
      j++;
      i++;
      answer++;
    } else {
      i++;
    }
  }
  return answer;
}