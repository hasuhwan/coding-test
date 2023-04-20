function solution(n) {
    var answer = 0;
    function dfs(str,standard){
        if(standard<0){
            return;
        }
        if(str.length===2*n){
            if(standard===0){
                answer++;
            }
            return;
        }
        dfs(str+"(",standard+1);
        dfs(str+")",standard-1);
    }
    dfs("(",1);
    return answer;
}