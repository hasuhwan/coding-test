function solution(number, k) {
  var answer = [];
  const arr = number.split("").map((ele) => Number(ele));
  let except = k + 1;
  let start = 0;
  let preindex = 0;
  while (answer.length !== number.length - k) {
    let max = 0;
    start = preindex;
    for (let i = start; i < except; i++) {
      if (arr[i] === 9) {
        max = 9;
        preindex = i + 1;
        break;
      } else if (max < arr[i]) {
        max = arr[i];
        preindex = i + 1;
      }
    }
    answer.push(max);
    except++;
  }
  return answer.join("");
}