function solution(info, edges) {
    var answer = 0;
    const map=new Map();
    edges.forEach(([from,to])=>{
        if(!map.has(from)){
            map.set(from,[]);
        }
        map.get(from).push(to);
    });
    function dfs(node,sheep,wolf,possible){
        answer=Math.max(answer,sheep);
        if(sheep<=wolf){
            return;
        }
        const tempSet=new Set([...(map.get(node)||[]),...possible]);
        tempSet.delete(node);
        for(let next of tempSet){
         if(info[next]){
             dfs(next,sheep,wolf+1,tempSet);
         }else{
             dfs(next,sheep+1,wolf,tempSet);
         }
        }
    }
    dfs(0,1,0,new Set());
    return answer;
}