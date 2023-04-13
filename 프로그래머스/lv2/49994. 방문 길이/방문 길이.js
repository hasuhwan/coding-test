function solution(dirs) {
    var answer = 0;
    const visited=[];
    const dir={
        U:[0,1],
        D:[0,-1],
        R:[1,0],
        L:[-1,0]
    };
    let start=[0,0];
    for(let i=0; i<dirs.length; i++){
        const [stepX,stepY]=dir[dirs[i]];
        const [X,Y]=start;
        const [nextX,nextY]=[stepX+X,stepY+Y];
        if(nextX<-5||nextY<-5||nextX>5||nextY>5){
            continue;
        }
        const tempVisit=`${(nextX+X)/2},${(nextY+Y)/2}`
        if(!visited.includes(tempVisit)){
            visited.push(tempVisit);
            answer++;
        }
        start=[nextX,nextY];

        
      
        
    }
    return answer;
}