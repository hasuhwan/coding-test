function solution(n, s, a, b, fares) {
    var answer = Infinity;
    const dp=new Array(n+1).fill().map(()=>new Array(n+1).fill(Infinity));
    for(let i=0; i<dp.length; i++){
        dp[i][i]=0;
    }
    fares.forEach(([one,two,fare])=>{
        dp[one][two]=fare;
        dp[two][one]=fare;
    });
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            for(let k=1; k<=n; k++){
                dp[j][k]=Math.min(dp[j][k],dp[j][i]+dp[i][k]);
            }
        }
    }
    answer=dp[s][a]+dp[s][b];
    for(let i=1; i<=n; i++){
        answer=Math.min(answer,dp[s][i]+dp[i][a]+dp[i][b]);
    }
    return answer;
}