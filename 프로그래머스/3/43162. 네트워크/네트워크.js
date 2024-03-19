function solution(n, computers) {
    var answer = 0;
    const visited=new Array(n).fill(0);
    function dfs(node){
        node.forEach((el,idx)=>{
            if(visited[idx]||el===0){
                return;
            }
            visited[idx]=1;
            dfs(computers[idx]);
        })
    }
    for(let i=0; i<n; i++){
        if(visited[i]){
            continue;
        }
        answer++;
        visited[i]=1;
        dfs(computers[i]);
    }
    return answer;
}