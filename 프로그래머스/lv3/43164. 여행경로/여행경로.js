function solution(tickets) {
    var answer = [];
    tickets=tickets.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]>b[1]?1:-1;
        }
        return a[0]>b[0]?1:-1;
    }).map((el,idx)=>[...el,idx]);
    const visited=new Array(tickets.length).fill(false);
    function dfs(temp,arr){
        if(visited.every(el=>el===true)){
            answer.push([...arr]);
            return true;
        }
        const allowArr=tickets.filter(([from,to,idx])=>{
            return from===temp&&visited[idx]===false;
        })
        allowArr.forEach(([from,to,idx])=>{
            arr.push(to);
            visited[idx]=true;
            if(dfs(to,arr)===true){
                return true;
            };
            arr.pop();
            visited[idx]=false;
        })
    }
    dfs("ICN",["ICN"]);
    
    return answer[0];
}