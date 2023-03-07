function solution(n, results) {
  var answer = 0;
  const obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = { win: [], lose: [] };
  }
  for (let i = 0; i < results.length; i++) {
    const [win, lose] = results[i];
    obj[win].win.push(lose);
    obj[lose].lose.push(win);
  }
  function winFunc(tempArr, visited) {
    for (let i = 0; i < tempArr.length; i++) {
      if (visited[tempArr[i]] === false) {
        visited[tempArr[i]] = true;
        winFunc(obj[tempArr[i]].win, visited);
      }
    }
  }
  function loseFunc(tempArr, visited) {
    for (let i = 0; i < tempArr.length; i++) {
      if (visited[tempArr[i]] === false) {
        visited[tempArr[i]] = true;
        loseFunc(obj[tempArr[i]].lose, visited);
      }
    }
  }
  for (let key in obj) {
    const visited = new Array(n + 1).fill(false);
    visited[0] = true;
    visited[key] = true;
    winFunc(obj[key].win, visited);
    loseFunc(obj[key].lose, visited);
    if (visited.every((el) => el === true)) {
      answer++;
    }
  }
  return answer;
}