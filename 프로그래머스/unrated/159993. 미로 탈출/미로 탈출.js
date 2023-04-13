function solution(maps) {
  var answer = 0;
  let start = [];
  let lever = [];
  let exit = [];
  maps=maps.map(el=>el.split(""));
  const N = maps.length;
  const M = maps[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "S") {
        start = [i, j];
      } else if (maps[i][j] === "L") {
        lever = [i, j];
      } else if (maps[i][j] === "E") {
        exit = [i, j];
      }
    }
  }
  function bfs(start, finish) {
    const queue = [[...start, 0]];
    const mapL = JSON.parse(JSON.stringify(maps));
    mapL[start[0]][start[1]] = "X";
    while (queue.length !== 0) {
      const [Y, X, time] = queue.shift();
      if (Y === finish[0] && X === finish[1]) {
        return time;
      }
      for (let i = 0; i < dir.length; i++) {
        const [stepY, stepX] = dir[i];
        const [nextY, nextX] = [stepY + Y, stepX + X];
        if (nextY < 0 || nextY >= N || nextX < 0 || nextX >= M) {
          continue;
        }
        if (mapL[nextY][nextX] !== "X") {
          mapL[nextY][nextX] = "X";
          queue.push([nextY, nextX, time + 1]);
        }
      }
    }
    return -1;
  }
  const timeL = bfs(start, lever);
  const timeE = bfs(lever, exit);
  if (timeL !== -1 && timeE !== -1) {
    return timeL + timeE;
  }

  return -1;
}
