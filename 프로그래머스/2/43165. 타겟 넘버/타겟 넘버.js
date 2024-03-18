function solution(numbers, target) {
    var answer = 0;
    const n=numbers.length;
    function dfs(num,count,idx){
        if(idx===n){
            if(num===target){
                answer++;
            }
            return;
        }
        
        dfs(num+numbers[idx],count+1,idx+1);
        dfs(num-numbers[idx],count+1,idx+1);
    }
    dfs(0,0,0);
    return answer;
}