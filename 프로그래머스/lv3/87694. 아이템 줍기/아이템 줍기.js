function solution(rectangle, characterX, characterY, itemX, itemY) {
    rectangle=rectangle.map(arr=>arr.map(el=>el*2));
    [characterX, characterY, itemX, itemY]=[characterX, characterY, itemX, itemY].map(el=>el*2);
    console.log(characterX, characterY, itemX, itemY);
    const arr=new Array(104).fill(0).map(()=>new Array(104).fill(0));
    rectangle.forEach(([x1,y1,x2,y2])=>{
        for(let i=y1; i<=y2; i++){
            for(let j=x1; j<=x2; j++){
                if(i===y1||i===y2||j===x1||j===x2){
                    if(arr[j][i]===1){
                        continue;
                    }
                    arr[j][i]+=1;
                }else{
                    arr[j][i]+=2;
                }
            }
        }
    });
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const queue=[[characterX,characterY,0]];
    arr[characterX][characterY]=2;
    while(queue.length!==0){
        const [x,y,count]=queue.shift();
        if(x===itemX&&y===itemY){
            return count/2;
        }
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[x+dirx,y+diry];
            if(nextx<0||nextx>=104||nexty<0||nexty>=104||arr[nextx][nexty]!==1){
                return;
            }
            arr[nextx][nexty]=2;
            queue.push([nextx,nexty,count+1]);
            
        })
    }
}