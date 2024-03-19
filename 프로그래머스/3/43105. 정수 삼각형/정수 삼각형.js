

function solution(triangle) {
    var answer = 0;
    const dp=new Array(triangle.length).fill(0).map((_,idx)=>new Array(triangle[idx].length).fill(0));
    dp[0][0]=triangle[0][0];
    for(let i=1; i<triangle.length; i++){
        const rowLen=triangle[i].length;
        for(let j=0; j<rowLen; j++){
            const before=dp[i-1][j-1]||0;
            const after=dp[i-1][j]||0;
            dp[i][j]=triangle[i][j]+Math.max(before,after);
        }
    }

    return Math.max(...dp[dp.length-1]);
}