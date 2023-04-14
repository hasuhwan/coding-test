function solution(k, tangerine) {
    var answer = 0;
    const map=new Map();
    for(let i=0; i<tangerine.length; i++){
        if(!map.has(tangerine[i])){
            map.set(tangerine[i],1);
        }else{
            map.set(tangerine[i],map.get(tangerine[i])+1);
        }
    }
const arr=[...map];
    arr.sort((a,b)=>b[1]-a[1]);
    for(let i=0; i<arr.length; i++){
        if(k<=0){
            return answer;
        }
        k-=arr[i][1];
        answer++;
    }
    return answer;
}