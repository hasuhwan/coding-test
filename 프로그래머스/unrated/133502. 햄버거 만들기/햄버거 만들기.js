function solution(ingredient) {
  var answer = 0;
  const visited = [];
  for (let i = 0; i < ingredient.length; i++) {
    visited.push(ingredient[i]);
    if (
      visited[visited.length - 4] === 1 &&
      visited[visited.length - 3] === 2 &&
      visited[visited.length - 2] === 3 &&
      visited[visited.length - 1] === 1
    ) {
      visited.splice(visited.length - 4, 4);
      answer++;
    }
  }
  return answer;
}