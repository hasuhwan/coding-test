function solution(n, computers) {
  var answer = 0;
  let visited = [];
  const dfs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1 && !visited.includes(i)) {
        visited.push(i);
        dfs(computers[i]);
      }
    }
  };

  for (let i = 0; i < computers.length; i++) {
    if (!visited.includes(i)) {
      visited.push(i);
      answer++;
      dfs(computers[i]);
    }
  }
  return answer;
}