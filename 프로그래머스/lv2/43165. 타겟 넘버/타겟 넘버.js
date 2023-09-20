function solution(numbers, target) {
    var answer = 0;
    function dfs(idx,temp){
        if(idx===numbers.length){
            if(temp===target){
                answer++;
            }
            return;
        }
        dfs(idx+1,temp+numbers[idx]);
        dfs(idx+1,temp-numbers[idx]);
    }
    dfs(0,0);
    return answer;
}