function solution(strs, t) {
    const len=t.length;
    const dp=new Array(len).fill(Infinity);
    
    for(let i=0; i<len; i++){
        const curr=t.slice(0,i+1);
        
        strs.forEach(str=>{
            if(curr.endsWith(str)){
                const diff=curr.length-str.length;
                
                if(diff===0){
                    dp[i]=1;
                }else{
                    dp[i]=Math.min(dp[i],dp[diff-1]+1);
                }
            }
        });
        
    }
    return dp[len-1]===Infinity?-1:dp[len-1];
}