function solution(n, m, x, y, r, c, k) {
    let answer;
    const prevSearch=k-(Math.abs(x-r)+Math.abs(y-c));
    if(prevSearch<0||prevSearch%2!==0){
        return "impossible";
    }
    
    const dir={
        "d":[1,0],
        "l":[0,-1],
        "r":[0,1],
        "u":[-1,0],
    }
    function dfs(tempX,tempY,str,count){
        if(count===k){
            if(tempX===r-1&&tempY===c-1){
                answer=str;
                return true;
            }
            return false;
        }
        if(str.length+Math.abs(r-1-tempX)+Math.abs(c-1-tempY)>k){
            return false;
        }
        for(let [key,value] of Object.entries(dir)){
            const [dirX,dirY]=value;
            const [nextX,nextY]=[tempX+dirX,tempY+dirY];
            if(nextX<0||nextY<0||nextX>=n||nextY>=m){
                continue;
            }
            if(dfs(nextX,nextY,str+key,count+1)){
                return true;
            }
        }
    }
    dfs(x-1,y-1,"",0)
    return answer;
}