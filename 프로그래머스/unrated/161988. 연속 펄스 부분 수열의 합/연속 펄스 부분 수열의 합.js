function solution(sequence) {
  const arr1 = [];
  const arr2 = [];
  let answer = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      arr1.push(sequence[i]);
      arr2.push(-sequence[i]);
    } else if (i % 2 === 0) {
      arr1.push(Math.max(arr1[i - 1] + sequence[i], sequence[i]));
      arr2.push(Math.max(arr2[i - 1] - sequence[i], -sequence[i]));
    } else {
      arr1.push(Math.max(arr1[i - 1] - sequence[i], -sequence[i]));
      arr2.push(Math.max(arr2[i - 1] + sequence[i], +sequence[i]));
    }
    answer = Math.max(answer, arr1[i], arr2[i]);
  }

  return answer;
}