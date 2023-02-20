function solution(numbers) {
  var answer = 0;
  let numArr = [];
  function dfs(num, visited) {
    for (let i = 0; i < numbers.length; i++) {
      if (visited[i] === false) {
        numArr.push(num + numbers[i]);
        visited[i] = true;
        dfs(num + numbers[i], visited);
        visited[i] = false;
      }
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    const visited = new Array(numbers.length).fill(false);
    numArr.push(numbers[i]);
    visited[i] = true;
    dfs(numbers[i], visited);
  }
  numArr = numArr.map((el) => Number(el));
  numArr = new Set(numArr);
  numArr.forEach((num) => {
    if (num === 0 || num === 1) {
      return;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return;
      }
      answer++;
    }
  });
  return answer;
}