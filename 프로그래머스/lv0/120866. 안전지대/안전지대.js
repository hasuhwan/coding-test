function solution(board) {
    
    const m=board.length; 
    const n=board[0].length;
    let answer=m*n;
    const direction=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
    const safe=new Array(m).fill(0).map(()=>new Array(n).fill(false));
    const bomb=[];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]===1){
                bomb.push([i,j]);
            }
        }
    }
    
    bomb.forEach(([x,y])=>{
        safe[x][y]=true;
        direction.forEach(([dirx,diry])=>{
            const [nextX,nextY]=[x+dirx,y+diry];
            if(nextX<0||nextX>=m||nextY<0||nextY>=n||safe[nextX][nextY]===true){
                return;
            }
            safe[nextX][nextY]=true;
        })
    })
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(safe[i][j]===true){
                answer--;
            }
        }
    }
    return answer;
}