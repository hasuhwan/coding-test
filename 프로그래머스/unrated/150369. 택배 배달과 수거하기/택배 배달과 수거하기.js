function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    const stackD=[];
    const stackP=[];
    for(let i=0; i<n; i++){
        if(deliveries[i]!==0){
            stackD.push([deliveries[i],i+1]);
        }
        if(pickups[i]!==0){
            stackP.push([pickups[i],i+1]);
        }
    }
    function pop(stack,count,size,len){
        if(count<size){
            stack.push([size-count,len]);
        }else if(count>size){
            count-=size;
        
            while(count!==0&&stack.length!==0){
                const temp=stack.pop();
                if(count>=temp[0]){
                    count-=temp[0];
                }else{
                    stack.push([temp[0]-count,temp[1]]);
                    count=0;
                }
            }
        }
    }
    while(stackD.length!==0||stackP.length!==0){
        let D=stackD.pop();
        let P=stackP.pop();
       D=D===undefined?[0,0]:D;
        P=P===undefined?[0,0]:P;
        const distance=D[1]>P[1]?D[1]:P[1];
        pop(stackD,cap,D[0],D[1]);
        pop(stackP,cap,P[0],P[1]);
        
        answer+=distance*2;
       
    }
    return answer;
}