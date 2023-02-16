function solution(maps) {
  var answer = [];
  const newMaps = maps.map((el) => el.split(""));
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (let i = 0; i < newMaps.length; i++) {
    for (let j = 0; j < newMaps[0].length; j++) {
      let sum = 0;
      if (newMaps[i][j] !== "X") {
        const queue = [[i, j]];
        sum = Number(newMaps[i][j]);
        newMaps[i][j] = "X";
        while (queue.length !== 0) {
          const [moveX, moveY] = queue.shift();
          direction.forEach((el) => {
            const [x, y] = el;
            if (
              moveX + x >= 0 &&
              moveX + x < newMaps.length &&
              moveY + y >= 0 &&
              moveY + y < newMaps[0].length &&
              newMaps[moveX + x][moveY + y] !== "X"
            ) {
              sum += Number(newMaps[moveX + x][moveY + y]);
              newMaps[moveX + x][moveY + y] = "X";
              queue.push([moveX + x, moveY + y]);
            }
          });
        }
      }
      if (sum !== 0) {
        answer.push(sum);
      }
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}