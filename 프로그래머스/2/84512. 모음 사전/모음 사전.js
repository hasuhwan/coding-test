function solution(word) {
    var answer = 0;
    const vowel=[ 'A', 'E', 'I', 'O', 'U'];
    function dfs(curr){
        if(curr.length>5){
            return false;
        }
        if(curr===word){
            return true;
        }
        answer++;
        for(let str of vowel){
            if(dfs(curr+str)){
                return true;
            }
        }
    }
    dfs("");
    return answer;
}