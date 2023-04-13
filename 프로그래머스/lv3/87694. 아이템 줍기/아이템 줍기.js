function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    characterX=characterX*2;
    characterY=characterY*2;
    itemX=itemX*2;
    itemY=itemY*2;
    rectangle=rectangle.map(el=>el.map(v=>v*2));
    const scale=new Array(103).fill(0).map(()=>new Array(103).fill(0));
rectangle.forEach(el=>{
    const [lbx,lby,rtx,rty]=el;
    for(let i=lbx; i<=rtx; i++){
        for(let j=lby; j<=rty; j++){
            if(i===lbx||i===rtx||j===lby||j===rty){
                if(scale[i][j]===0){
                    scale[i][j]=1;
                }
            }else{
                scale[i][j]=2;
            }
        }
    }
})
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    const queue=[[characterX, characterY,0]];
    scale[characterX][characterY]=0;
    while(queue.length!==0){
        const [X,Y,count]=queue.shift();
        if(X===itemX&&Y===itemY){
            return count/2;
        }
        for(let i=0; i<direction.length; i++){
            const [stepX,stepY]=direction[i];
            const [nextX,nextY]=[stepX+X,stepY+Y];
    if(scale[nextX][nextY]===1){
        queue.push([nextX,nextY,count+1]);
        scale[nextX][nextY]=0;
    }
        }
    }
    
    
    return answer;
}