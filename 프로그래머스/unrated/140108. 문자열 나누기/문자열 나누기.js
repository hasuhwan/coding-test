function solution(s) {
  var answer = 0;
  let arr = s.split("");
  let head = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === head) {
      count += 1;
    } else if (arr[i] !== head) {
      count -= 1;
    }

    if (count === 0) {
      answer++;
      arr.splice(0, i + 1);
      head = arr[0];
      i = -1;
    } else if (i === arr.length - 1) {
      answer++;
    }
  }
  return answer;
}