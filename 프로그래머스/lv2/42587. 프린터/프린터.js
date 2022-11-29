function solution(priorities, location) {
  const purposeArr = new Array(priorities.length).fill(-1);
  purposeArr[location] = -2;
  const arr = [];
  const answerArr = [];

  for (let i = 0; i < priorities.length; i++) {
    arr.push([purposeArr[i], priorities[i]]);
  }
  while (arr.length !== 0) {
    answerArr.push(arr[0]);
    arr.shift();
    if (answerArr[answerArr.length - 1][1] < Math.max(...arr.flat(Infinity))) {
      arr.push(answerArr[answerArr.length - 1]);
      answerArr.pop();
    }
  }
  console.log(answerArr);
  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i].indexOf(-2) !== -1) {
      return i + 1;
    }
  }
}