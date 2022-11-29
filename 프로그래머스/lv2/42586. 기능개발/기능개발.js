function solution(progresses, speeds) {
  var answer = [];
  const arr = [];
  let count = 1;
  for (let i = 0; i < progresses.length; i++) {
    arr[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max >= arr[i]) {
      count++;
    } else {
      max = arr[i];
      answer.push(count);
      count = 1;
    }
  }
  answer.push(count);
  return answer;
}