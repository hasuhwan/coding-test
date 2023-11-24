function solution(n, costs) {
    var answer = 0;
    const parents=new Array(n).fill().map((_,idx)=>idx);
    costs.sort((a,b)=>a[2]-b[2]);
    function getParent(node){
        if(node===parents[node]){
            return node;
        }else{
            const curr=getParent(parents[node]);
            parents[node]=curr;
            return curr;
        }
    }
    function unionFind(a,b){
        const one=getParent(a);
        const two=getParent(b);
        if(one===two){
            return false;
        }
        if(one>two){
            parents[one]=two;
        }else{
            parents[two]=one;
        }
        return true;
    }
    costs.forEach(([a,b,cost])=>{
        if(unionFind(a,b)){
            answer+=cost;
        }
    })
    return answer;
}