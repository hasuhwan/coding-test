function solution(board, moves) {
  var answer = 0;
  const stack = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const temp = board[j][moves[i] - 1];
      if (temp !== 0 && stack[stack.length - 1] !== temp) {
        stack.push(temp);
        board[j][moves[i] - 1] = 0;
        break;
      } else if (temp !== 0 && stack[stack.length - 1] === temp) {
        stack.pop();
        board[j][moves[i] - 1] = 0;
        answer += 2;
        break;
      }
    }
  }
  return answer;
}