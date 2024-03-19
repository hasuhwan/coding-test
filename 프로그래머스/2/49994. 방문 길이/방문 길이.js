function solution(dirs) {
    var answer = 0;
    const dir={
        "U":[0,1],
        "D":[0,-1],
        "L":[-1,0],
        "R":[1,0],
    }
    const visit=new Set();
    let [prevX,prevY]=[0,0];
    for(let char of dirs){
        const [dirX,dirY]=dir[char];
        const [nextX,nextY]=[prevX+dirX,prevY+dirY];
        if(nextX<-5||nextX>5||nextY<-5||nextY>5){
            continue;
        }
        const allow= (prevX+nextX)/2+","+(prevY+nextY)/2;
        if(!visit.has(allow)){
            answer++;
            visit.add(allow);
        }
        [prevX,prevY]=[nextX,nextY];
    }
    return answer;
}