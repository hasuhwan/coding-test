function solution(n, computers) {
    var answer = 0;
    const visited=new Array(n).fill(false);
    function dfs(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i]===1&&!visited[i]){
                visited[i]=true;
                dfs(computers[i]);
            }
        }
    }
    computers.forEach((el,idx)=>{
        if(!visited[idx]){
            answer++;
            visited[idx]=true;
            dfs(el);
        }
    })
    return answer;
}