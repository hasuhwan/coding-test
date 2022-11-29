function solution(operations) {
  var answer = [];
  const multiOperations = operations.map((ele) => ele.split(" "));
  multiOperations.forEach((ele) => {
    if (ele[0] === "I") {
      answer.push(Number(ele[1]));
    } else {
      if (answer.length !== 0) {
        ele[1] === "1"
          ? answer.splice(answer.indexOf(Math.max(...answer)), 1)
          : answer.splice(answer.indexOf(Math.min(...answer)), 1);
      }
    }
  });
  return answer.length === 0
    ? [0, 0]
    : [Math.max(...answer), Math.min(...answer)];
}