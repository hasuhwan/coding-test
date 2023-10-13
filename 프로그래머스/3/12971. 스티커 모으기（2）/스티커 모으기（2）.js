function solution(sticker) {
    const len=sticker.length;
    if(len<=2){
        return Math.max(...sticker);
    }
    const dp1=new Array(len).fill(0);
    const dp2=new Array(len).fill(0);
    dp1[0]=sticker[0];
    dp1[1]=sticker[0];
    dp2[1]=sticker[1];
    for(let i=2; i<len; i++){
        if(i!==len-1){
            dp1[i]=Math.max(dp1[i-2]+sticker[i],dp1[i-1]);    
        }else{
            dp1[i]=dp1[i-1];
        }
        dp2[i]=Math.max(dp2[i-2]+sticker[i],dp2[i-1]);
    }
    
   
    return Math.max(dp1[len-1],dp2[len-1]);
}