function solution(expression) {
  var answer = 0;
  const arr = expression.match(/\d+|[\+\-\*]/g);
  const operator = ["+", "-", "*"];
  const orderArr = [];
  function dfs(tempOperatorArr, visited) {
    if (tempOperatorArr.length === operator.length) {
      orderArr.push(tempOperatorArr);
      return;
    }
    for (let i = 0; i < operator.length; i++) {
      if (visited[i] === false) {
        visited[i] = true;
        const comArr = [...tempOperatorArr];
        comArr.push(operator[i]);
        dfs(comArr, visited);
        visited[i] = false;
      }
    }
  }
  for (let i = 0; i < operator.length; i++) {
    const visited = new Array(operator.length).fill(false);
    visited[i] = true;
    dfs([operator[i]], visited);
  }
  orderArr.forEach((el) => {
    const com = [...arr];
    for (let i = 0; i < operator.length; i++) {
      while (com.includes(el[i])) {
        const idx = com.indexOf(el[i]);
        if (el[i] === "+") {
          com.splice(idx - 1, 3, Number(com[idx - 1]) + Number(com[idx + 1]));
        } else if (el[i] === "-") {
          com.splice(idx - 1, 3, Number(com[idx - 1]) - Number(com[idx + 1]));
        } else {
          com.splice(idx - 1, 3, Number(com[idx - 1]) * Number(com[idx + 1]));
        }
      }
    }
    const abs = Math.abs(com[0]);
    answer < abs ? (answer = abs) : answer;
  });
  return answer;
}