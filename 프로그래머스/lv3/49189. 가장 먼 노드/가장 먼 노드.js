function solution(n, edge) {
  const countArr = new Array(n + 1).fill(0);
  const visitedArr = new Array(n + 1).fill(false);
  const queue = [1];
  visitedArr[1] = true;
  while (queue.length !== 0) {
    const start = queue.shift();
    edge.forEach((el) => {
      if (el[0] === start && visitedArr[el[1]] === false) {
        queue.push(el[1]);
        visitedArr[el[1]] = true;
        countArr[el[1]] = countArr[el[0]] + 1;
      } else if (el[1] === start && visitedArr[el[0]] === false) {
        queue.push(el[0]);
        visitedArr[el[0]] = true;
        countArr[el[0]] = countArr[el[1]] + 1;
      }
    });
  }
  const max = Math.max(...countArr);
  return countArr.filter((el) => el === max).length;
}