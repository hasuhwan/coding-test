function solution(land) {
    const m=land.length;
    const n=land[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const accArr=new Array(n+1).fill(0);
    function bfs(queue,end){
        let mass=1;
        while(queue.length!==0){
            const [x,y]=queue.shift();
            
            dir.forEach(([dirx,diry])=>{
                const [nextx,nexty]=[x+dirx,y+diry];
                if(nextx<0||nexty<0||nextx>=m||nexty>=n||land[nextx][nexty]===0){
                    return;
                }
                land[nextx][nexty]=0;
                mass++;
                end=Math.max(end,nexty);
                queue.push([nextx,nexty]);
            })
        }
        return [mass,end];
    }
    for(let j=0; j<n; j++){
        const start=j;
        for(let i=0; i<m; i++){
            if(land[i][j]===1){
                land[i][j]=0;
                const [mass,end]=bfs([[i,j]],j);
                accArr[start]+=mass;
                accArr[end+1]-=mass;
            }
        }
    }
    for(let i=1; i<accArr.length; i++){
        accArr[i]+=accArr[i-1];
    }
    return Math.max(...accArr);


}