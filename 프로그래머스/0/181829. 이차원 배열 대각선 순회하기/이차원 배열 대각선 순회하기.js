function solution(board, k) {
    var answer = 0;
    for(let i=0; i<board.length&&i<=k; i++){
        for(let j=0; j<board[0].length&&j<=k-i; j++){
            answer+=board[i][j];
        }
    }
    return answer;
}