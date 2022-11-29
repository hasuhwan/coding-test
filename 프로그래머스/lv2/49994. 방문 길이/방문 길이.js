function solution(dirs) {
  let x = 0;
  let y = 0;
  const preRoad = [];
  const directionObj = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  for (let i = 0; i < dirs.length; i++) {
    const nextX = x + directionObj[dirs[i]][0];
    const nextY = y + directionObj[dirs[i]][1];
    if (Math.abs(nextX) <= 5 && Math.abs(nextY) <= 5) {
      const road = `${nextX + x}, ${nextY + y}`;
      preRoad.push(road);
      x = nextX;
      y = nextY;
    }
  }
  const set = new Set(preRoad);
  return set.size;
}