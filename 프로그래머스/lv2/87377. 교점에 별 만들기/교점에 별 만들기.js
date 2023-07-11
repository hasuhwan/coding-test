function solution(line) {
    const co=[];
    for(let i=0; i<line.length-1; i++){
        const [a,b,e]=line[i];
        for(let j=i+1; j<line.length; j++){
            const [c,d,f]=line[j];
            const bot=a*d-b*c;
            if(bot===0){
                continue;
            }
            const x=(b*f-e*d)/bot;
            const y=(e*c-a*f)/bot;
            if(parseInt(x)===x&&parseInt(y)===y){
                co.push([x,y]);
            }
        }
    }
    let top=co[0][1];
    let bottom=co[0][1];
    let right=co[0][0];
    let left=co[0][0];
    co.forEach(([x,y])=>{
        top=Math.max(top,y);
        bottom=Math.min(bottom,y);
        left=Math.min(left,x);
        right=Math.max(right,x);
    })
    const answer=new Array(top-bottom+1).fill(0).map(()=>new Array(right-left+1).fill("."));
    co.forEach(([x,y])=>{
        answer[top-y][x-left]="*";
    });
    return answer.map(el=>el.join(""));
}