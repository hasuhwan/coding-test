function solution(m, n, board) {
  const newBoard = board.map((el) => el.split(""));
  while (true) {
    let zeroArr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          newBoard[i][j] === newBoard[i + 1][j] &&
          newBoard[i][j] === newBoard[i][j + 1] &&
          newBoard[i][j] === newBoard[i + 1][j + 1] &&
          newBoard[i][j] !== 0
        ) {
          zeroArr.push([i, j]);
        }
      }
    }
    if (zeroArr.length === 0) {
      return newBoard.flat().filter((el) => el === 0).length;
    }

    zeroArr.forEach((el) => {
      newBoard[el[0]][el[1]] = 0;
      newBoard[el[0]][el[1] + 1] = 0;
      newBoard[el[0] + 1][el[1]] = 0;
      newBoard[el[0] + 1][el[1] + 1] = 0;
    });
    for (let i = m - 1; i > 0; i--) {
      if (newBoard[i].every((el) => el !== 0)) {
        continue;
      }
      for (let j = 0; j < n; j++) {
        if (newBoard[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            if (newBoard[k][j] !== 0) {
              newBoard[i][j] = newBoard[k][j];
              newBoard[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }
}