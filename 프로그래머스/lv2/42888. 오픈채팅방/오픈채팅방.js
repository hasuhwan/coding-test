function solution(record) {
  var answer = [];
  const obj = {};
  const splitArr = [];
  for (let i = 0; i < record.length; i++) {
    splitArr.push(record[i].split(" "));
    if (splitArr[i][0] === "Enter" || splitArr[i][0] === "Change") {
      obj[splitArr[i][1]] = splitArr[i][2];
    }
  }

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i][0] === "Enter") {
      const text = `${obj[splitArr[i][1]]}님이 들어왔습니다.`;
      answer.push(text);
    } else if (splitArr[i][0] === "Leave") {
      const text = `${obj[splitArr[i][1]]}님이 나갔습니다.`;
      answer.push(text);
    } else {
      continue;
    }
  }
  return answer;
}