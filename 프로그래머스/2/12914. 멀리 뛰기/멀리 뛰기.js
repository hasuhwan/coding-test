function solution(n) {
    const dp=[0,1,2];
    function fibo(n){
        if(dp[n]!==undefined){
            return dp[n];
        }
        dp[n]=(fibo(n-1)+fibo(n-2))%1234567;
        return dp[n];
    }
    return fibo(n);
}