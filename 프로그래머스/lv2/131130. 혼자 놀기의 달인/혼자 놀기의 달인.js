function solution(cards) {
  const arr = [];
  function dfs(temp, visited, count) {
    if (visited[temp - 1] === false) {
      visited[temp - 1] = true;
      dfs(cards[temp - 1], visited, count + 1);
    } else {
      const one = count;
      let two = 0;
      for (let i = 0; i < cards.length; i++) {
        if (visited[i] === false) {
          visited[i] = true;
          const temp2 = dfs2(cards[i], visited, 1);
          two = two > temp2 ? two : temp2;
          visited[i] = false;
        }
      }
      arr.push([one, two]);
    }
  }
  function dfs2(temp, visited, count) {
    if (visited[temp - 1] === false) {
      visited[temp - 1] = true;
      return dfs2(cards[temp - 1], visited, count + 1);
    } else {
      return count;
    }
  }
  for (let i = 0; i < cards.length; i++) {
    const visited = new Array(cards.length).fill(false);
    visited[i] = true;
    dfs(cards[i], visited, 1);
  }
  const arr2 = arr.map((el) => el[0] * el[1]);
  return Math.max(...arr2);
}