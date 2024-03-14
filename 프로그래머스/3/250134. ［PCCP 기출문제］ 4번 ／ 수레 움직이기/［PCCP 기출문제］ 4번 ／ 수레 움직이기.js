function solution(maze) {
  var answer = Infinity;
  const m = maze.length;
  const n = maze[0].length;
  const redVisit = new Set();
  const blueVisit = new Set();
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let redS, blueS;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const temp = maze[i][j];
      if (temp === 1) {
        redS = [i, j];
        redVisit.add(i + "" + j);
      } else if (temp === 2) {
        blueS = [i, j];
        blueVisit.add(i + "" + j);
      }
    }
  }
  function back(redX, redY, blueX, blueY, count) {
    if (maze[redX][redY] === 3 && maze[blueX][blueY] === 4) {
      answer = Math.min(answer, count);
      return;
    }
    if (maze[redX][redY] === 3) {
      dir.forEach(([blueDirX, blueDirY]) => {
        const [blueNextX, blueNextY] = [blueX + blueDirX, blueY + blueDirY];
        if (
          blueNextX < 0 ||
          blueNextX >= m ||
          blueNextY < 0 ||
          blueNextY >= n ||
          maze[blueNextX][blueNextY] === 5 ||
          blueVisit.has(blueNextX + "" + blueNextY) ||
          (redX === blueNextX && redY === blueNextY)
        ) {
          return;
        }
        const blueVisitAdd = blueNextX + "" + blueNextY;
        blueVisit.add(blueVisitAdd);
        back(redX, redY, blueNextX, blueNextY, count + 1);
        blueVisit.delete(blueVisitAdd);
      });
    }
    if (maze[blueX][blueY] === 4) {
      dir.forEach(([redDirX, redDirY]) => {
        const [redNextX, redNextY] = [redX + redDirX, redY + redDirY];
        if (
          redNextX < 0 ||
          redNextX >= m ||
          redNextY < 0 ||
          redNextY >= n ||
          maze[redNextX][redNextY] === 5 ||
          redVisit.has(redNextX + "" + redNextY) ||
          (blueX === redNextX && blueY === redNextY)
        ) {
          return;
        }
        const redVisitAdd = redNextX + "" + redNextY;
        redVisit.add(redVisitAdd);
        back(redNextX, redNextY, blueX, blueY, count + 1);
        redVisit.delete(redVisitAdd);
      });
    }
    dir.forEach(([redDirX, redDirY]) => {
      let [redNextX, redNextY] = [redX + redDirX, redY + redDirY];
      if (
        redNextX < 0 ||
        redNextX >= m ||
        redNextY < 0 ||
        redNextY >= n ||
        maze[redNextX][redNextY] === 5 ||
        redVisit.has(redNextX + "" + redNextY)
      ) {
        return;
      }
      const redVisitAdd = redNextX + "" + redNextY;
      redVisit.add(redVisitAdd);
      dir.forEach(([blueDirX, blueDirY]) => {
        const [blueNextX, blueNextY] = [blueX + blueDirX, blueY + blueDirY];
        if (
          blueNextX < 0 ||
          blueNextX >= m ||
          blueNextY < 0 ||
          blueNextY >= n ||
          maze[blueNextX][blueNextY] === 5 ||
          blueVisit.has(blueNextX + "" + blueNextY) ||
          (redX === blueNextX &&
            redY === blueNextY &&
            blueX === redNextX &&
            blueY === redNextY) ||
          (redNextX === blueNextX && redNextY === blueNextY)
        ) {
          return;
        }
        const blueVisitAdd = blueNextX + "" + blueNextY;
        blueVisit.add(blueVisitAdd);
        back(redNextX, redNextY, blueNextX, blueNextY, count + 1);
        blueVisit.delete(blueVisitAdd);
      });
      redVisit.delete(redVisitAdd);
    });
  }
  back(redS[0], redS[1], blueS[0], blueS[1], 0);
  return answer === Infinity ? 0 : answer;
}
