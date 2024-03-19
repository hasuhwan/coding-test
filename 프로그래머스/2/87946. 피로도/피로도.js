function solution(k, dungeons) {
    var answer = 0;
    function dfs(piro,visited){
        answer=Math.max(visited.size,answer);
        
        dungeons.forEach((dungeon,idx)=>{
            const [need,demand]=dungeon;
            if(visited.has(idx)||need>piro||demand>=piro){
                return;
            }
            visited.add(idx);
            dfs(piro-demand,visited);
            visited.delete(idx);
        });
    };
    dfs(k,new Set());
    return answer;
}