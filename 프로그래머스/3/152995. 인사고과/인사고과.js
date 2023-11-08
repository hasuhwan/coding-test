//한 사원이 임의의 사원의 두 점수보다 모두 낮은 경우는 실격
//합으로 석차를 내어 정한다. 동석차의 경우 동석차의 수만큼 다음 석차는 건너 뛴다.

function solution(scores) {
    var answer = 0;
    const map=new Map();
    const sorted=scores.map((el,idx)=>[...el,idx]).sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]-b[1];
        }else{
            return b[0]-a[0];
        }
    });
    let min=sorted[0][1];
    let prev=sorted[0][0];
    map.set(sorted[0][0]+sorted[0][1],[sorted[0][2]]);
    for(let i=1; i<sorted.length; i++){
        const [one,two,idx]=sorted[i];
        const sum=one+two;
        min=Math.max(min,two);
        if(two>=min){
            if(!map.has(sum)){
            map.set(sum,[]);
        }
        map.get(sum).push(idx); 
        }
           
    }
    let rank=1;
    const countSorted=[...map.entries()].sort((a,b)=>b[0]-a[0]);
    for(let i=0; i<countSorted.length; i++){
        const [val,arr]=countSorted[i];
        if(arr.includes(0)){
            return rank;
        }
        rank+=arr.length;
    }
    return rank===1?1:-1;

}