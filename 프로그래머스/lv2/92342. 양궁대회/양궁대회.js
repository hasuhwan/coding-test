function solution(n, info) {
    var answer = [-1];
let max=1;
function dfs(arrow,winArr,idx){
    if(arrow===0){
        let A=0;
        let R=0;
        winArr.forEach((el,idx)=>{
            if(el>info[idx]){
                R+=10-idx;
            }else if(el<info[idx]||(el===info[idx]&&el!==0)){
                A+=10-idx;
            }
        })
        
    if(max<R-A){
        max=R-A;
        answer=[...winArr];
    }else if(max===R-A){
        for(let i=10; i>=0; i--){
            if(answer[i]>winArr[i]){
                break;
            }else if(answer[i]<winArr[i]){
                answer=[...winArr];
                break;
            }
        }
    }
        return;
    }
    for(let i=idx+1; i<11; i++){
        winArr[i]=arrow>=info[i]+1?info[i]+1:arrow;
        let tempArrow=arrow>info[i]+1?arrow-(info[i]+1):0;
        dfs(tempArrow,winArr,i)
        winArr[i]=0;
    }
}
    for(let i=0; i<11; i++){
        let arrow=n>info[i]+1?n-(info[i]+1):0;
        const winArr=[0,0,0,0,0,0,0,0,0,0,0];
        winArr[i]=n>=info[i]+1?info[i]+1:n;
        dfs(arrow,winArr,i);
    }
    return answer;
}