function solution(board, skill) {
    var answer = 0;
    const m=board.length;
    const n=board[0].length;
    const dp=new Array(m+1).fill().map(()=>new Array(n+1).fill(0));
    skill.forEach(([type,r1,c1,r2,c2,degree])=>{
        if(type===1){
            degree=-degree;
        }
        dp[r1][c1]+=degree;
        dp[r1][c2+1]-=degree;
        dp[r2+1][c1]-=degree;
        dp[r2+1][c2+1]+=degree;
    });
    for(let i=0; i<m+1; i++){
        for(let j=1; j<n+1; j++){
            dp[i][j]+=dp[i][j-1];
        }
    }
    for(let i=1; i<m+1; i++){
        for(let j=0; j<n+1; j++){
            dp[i][j]+=dp[i-1][j];
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(dp[i][j]+board[i][j]>0){
                answer++;
            }
        }
    }
    return answer;
}