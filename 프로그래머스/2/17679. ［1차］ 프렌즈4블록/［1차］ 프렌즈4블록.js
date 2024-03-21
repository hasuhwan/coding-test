function solution(m, n, board) {
  board = board.map((el) => el.split(""));
  while (true) {
    const arr = [];
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] !== 0 &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          arr.push([i, j]);
        }
      }
    }
    if (arr.length === 0) {
      return board.flat().filter((el) => el === 0).length;
    }
    arr.forEach(([i, j]) => {
      board[i][j] = 0;
      board[i + 1][j] = 0;
      board[i][j + 1] = 0;
      board[i + 1][j + 1] = 0;
    });
    for (let i = m - 1; i >= 1; i--) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          for (let k = i - 1; k >= 0; k--) {
            if (board[k][j] !== 0) {
              [board[i][j], board[k][j]] = [board[k][j], board[i][j]];
              break;
            }
          }
        }
      }
    }
  }
}
