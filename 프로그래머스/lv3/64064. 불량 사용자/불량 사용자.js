function solution(user_id, banned_id) {
  var answer = 0;
  const visited = new Array(user_id.length).fill(false);
  let pointer = 0;
  const visitedArr = [];
  function dfs(temp, visited, p) {
    if (p === banned_id.length) {
      const tempVisited = [...visited];
      if (visitedArr.length === 0) {
        answer++;
        visitedArr.push(tempVisited);
        return;
      }
      const boolean = visitedArr.every((el) => {
        return el.some((bool, idx) => bool !== tempVisited[idx]);
      });
      if (boolean === true) {
        answer++;
        visitedArr.push(tempVisited);
        return;
      } else {
        return;
      }
    }

    user_id.forEach((el, index) => {
      if (el.length === temp.length) {
        const boolean = temp.split("").every((str, idx) => {
          if (str === "*") {
            return true;
          }
          return str === el[idx];
        });
        if (boolean === true && visited[index] === false) {
          visited[index] = true;
          dfs(banned_id[p + 1], visited, p + 1);
          visited[index] = false;
        }
      }
    });
  }
  dfs(banned_id[pointer], visited, pointer);
  return answer;
}