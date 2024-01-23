//map=>[give,receive]

function solution(edges) {
    const answer=new Array(4).fill(0);
    const map=new Map();
    edges.forEach(([from,to])=>{
        if(!map.has(from)){
            map.set(from,[1,0]);
        }else{
            const [give,receive]=map.get(from);
            map.set(from,[give+1,receive]);
        }
        if(!map.has(to)){
            map.set(to,[0,1]);
        }else{
            const [give,receive]=map.get(to);
            map.set(to,[give,receive+1]);
        }
    });
    for(let [key,v] of map.entries()){
        const [give,receive]=v;
        if(give>=2&&receive===0){
            answer[0]=key;
        }else if(give===0){
            answer[2]++;
        }else if(give >= 2 && receive >= 2){
            answer[3]++;
        }
    }
    answer[1]=map.get(answer[0])[0]-answer[2]-answer[3];
    return answer;
}