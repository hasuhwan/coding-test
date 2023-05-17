function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=>a[2]-b[2]);
    const parentArr=Array.from({length:n},(_,idx)=>idx);
    
    
    function getParent(node){
        if(parentArr[node]===node){
            return node;
        }
        return getParent(parentArr[node]);
    }
    
    costs.forEach(([start,end,cost])=>{
        const a=getParent(start);
        const b=getParent(end);
        if(a!==b){
            if(a>b){
                parentArr[b]=a;
            }else{
                parentArr[a]=b;
            }
            answer+=cost;
        }
    })
    return answer;
}