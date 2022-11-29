function solution(maps) {
  var answer = -1;
  const copy = JSON.parse(JSON.stringify(maps));
  const queue = [[0, 0, 1]];
  copy[0][0] = 0;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length !== 0) {
    const [x, y, count] = queue.shift();

    if (x === copy.length - 1 && y === copy[0].length - 1) {
      return count;
    }
    for (let i = 0; i < direction.length; i++) {
      const nx = direction[i][0] + x;
      const ny = direction[i][1] + y;
      if (
        nx >= 0 &&
        nx < copy.length &&
        ny >= 0 &&
        ny < copy[0].length &&
        copy[nx][ny] === 1
      ) {
        queue.push([nx, ny, count + 1]);
        copy[nx][ny] = 0;
      }
    }
  }
  return answer;
}