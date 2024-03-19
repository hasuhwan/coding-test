function solution(maps) {
    const n=maps.length;
    const m=maps[0].length;
    const queue=[[0,0,1]];
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    while(queue.length!==0){
        const [x,y,count]=queue.shift();
        if(x===n-1&&y===m-1){
            return count;
        }
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[x+dirx,y+diry];
            if(nextx<0||nextx>=n||nexty<0||nexty>=m||maps[nextx][nexty]===0){
                return;
            }
            maps[nextx][nexty]=0;
            queue.push([nextx,nexty,count+1]);
        })
        
    }
    return -1;
}