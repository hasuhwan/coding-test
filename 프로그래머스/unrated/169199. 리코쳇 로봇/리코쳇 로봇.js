function solution(board) {
  var answer = -1;
  const N = board.length;
  const M = board[0].length;
  let start = [];
  let finish = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "R") {
        start = [i, j];
      }
      if (board[i][j] === "G") {
        finish = [i, j];
      }
    }
  }
  board = board.map((el) => el.split(""));
  const queue = [[...start, 0]];
  board[start[0]][start[1]] = true;

  while (queue.length !== 0) {
    const [Y, X, count] = queue.shift();
    console.log(Y, X);
    if (Y === finish[0] && X === finish[1]) {
      return count;
    }
    for (let i = Y; i < N; i++) {
      if (i + 1 === N && board[i][X] === true) {
        break;
      } else if (i + 1 === N) {
        board[i][X] = true;
        console.log(board[i][X]);
        queue.push([i, X, count + 1]);
        break;
      }
      if (board[i + 1][X] === "D" && board[i][X] === true) {
        break;
      } else if (board[i + 1][X] === "D") {
        board[i][X] = true;
        queue.push([i, X, count + 1]);
        break;
      }
    }
    for (let i = Y; i >= 0; i--) {
      if (i === 0 && board[i][X] === true) {
        break;
      } else if (i === 0) {
        board[i][X] = true;
        queue.push([i, X, count + 1]);
        break;
      }
      if (board[i - 1][X] === "D" && board[i][X] === true) {
        break;
      } else if (board[i - 1][X] === "D") {
        board[i][X] = true;
        queue.push([i, X, count + 1]);
        break;
      }
    }
    for (let i = X; i < M; i++) {
      if (i + 1 === M && board[Y][i] === true) {
        break;
      } else if (i + 1 === M) {
        board[Y][i] = true;
        queue.push([Y, i, count + 1]);
        break;
      }
      if (board[Y][i + 1] === "D" && board[Y][i] === true) {
        break;
      } else if (board[Y][i + 1] === "D") {
        board[Y][i] = true;
        queue.push([Y, i, count + 1]);
        break;
      }
    }
    for (let i = X; i >= 0; i--) {
      if (i === 0 && board[Y][i] === true) {
        break;
      } else if (i === 0) {
        board[Y][i] = true;
        queue.push([Y, i, count + 1]);
        break;
      }
      if (board[Y][i - 1] === "D" && board[Y][i] === true) {
        break;
      } else if (board[Y][i - 1] === "D") {
        board[Y][i] = true;
        queue.push([Y, i, count + 1]);
        break;
      }
    }
  }
  return answer;
}