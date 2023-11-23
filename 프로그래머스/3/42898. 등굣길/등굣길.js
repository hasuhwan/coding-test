function solution(m, n, puddles) {
    const arr=new Array(n+1).fill(0).map(()=>new Array(m+1).fill(0));
    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(i===1&&j===1){
                arr[i][j]=1;
            }else{
                if(isPuddle(i, j, puddles)) continue;
            arr[i][j]=(arr[i-1][j]+arr[i][j-1])%1000000007;
            }
            
        }
    };
    return arr[n][m];
}
const isPuddle = (x, y, puddles) => {
  for(const puddle of puddles) {
    if(puddle[0] === y && puddle[1] === x)
      return true;
  }
  return false;
}