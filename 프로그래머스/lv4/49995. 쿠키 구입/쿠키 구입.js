function solution(cookie) {
    var answer = 0;
    for(let i=0; i<cookie.length-1; i++){
        let left=i;
        let right=i+1;
        let leftSum=cookie[left];
        let rightSum=cookie[right];
        while(true){
            if(leftSum===rightSum &&answer<leftSum){
                answer=leftSum;
            }else if(leftSum<=rightSum&&left!==0){
                leftSum+=cookie[--left];
            }else if(rightSum<=leftSum&&right!==cookie.length-1){
                rightSum+=cookie[++right];
            }else{
                break;
            }
        }
        
    }
    return answer;
}