function solution(board) {
  if (board.length < 2 || board[0].length < 2) {
    return 1;
  }
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + 1;
      }
    }
  }
  return Math.max(...board.reduce((ac, v) => [...ac, Math.max(...v)], [])) ** 2;
}