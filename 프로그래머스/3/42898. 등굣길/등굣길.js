function solution(m, n, puddles) {
    const dp=new Array(n+1).fill().map(()=>new Array(m+1).fill(0));
    dp[1][1]=1;
    const set=new Set();
    puddles.forEach(([x,y])=>{
        set.add(x+","+y);
    });
    for(let i=1; i<dp.length; i++){
        for(let j=1; j<dp[0].length; j++){
            if(i===1&&j===1){
                continue;
            }
            if(!set.has(j+","+i)){
                dp[i][j]=(dp[i-1][j]+dp[i][j-1])%1000000007;
            }
        }
    }
    return dp[n][m];
}