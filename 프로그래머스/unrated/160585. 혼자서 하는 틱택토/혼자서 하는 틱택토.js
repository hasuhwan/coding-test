function solution(board) {
  const newBoard = new Array(3).fill(0).map(() => new Array(3).fill("."));

  if (board.every((el) => el === "...")) {
    return 1;
  }
  function dfs(arr, type) {
    const temp = arr.map((el) => el.join(""));
    if (temp.every((el, idx) => el === board[idx])) {
      return true;
    }

    if (
      temp.some((el, idx) => {
        if (el === "OOO" || el === "XXX") {
          return true;
        }
        let str = "";
        let mat = "";
        let reMat = "";
        for (let i = 0; i < 3; i++) {
          str += temp[i][idx];
          mat += temp[i][i];
          reMat += temp[i][2 - i];
        }

        if (str === "OOO" || str === "XXX") {
          return true;
        }
        if (mat === "OOO" || mat === "XXX") {
          return true;
        }
        if (reMat === "OOO" || reMat === "XXX") {
          return true;
        }
      })
    ) {
      return false;
    }
    const turn = type === "O" ? "X" : "O";
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (newBoard[i][j] === ".") {
          newBoard[i][j] = turn;
          if (dfs(newBoard, turn)) {
            return true;
          }
          newBoard[i][j] = ".";
        }
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      newBoard[i][j] = "O";
      if (dfs(newBoard, "O")) {
        return 1;
      }
      newBoard[i][j] = ".";
    }
  }

  return 0;
}