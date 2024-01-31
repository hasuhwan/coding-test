function solution(arr, queries) {
    const answer=new Array(arr.length).fill(0);
   queries.forEach(([start,end])=>{
       answer[start]++;
       if(arr[end+1]!==undefined){
           answer[end+1]--;
       }
   });
    for(let i=1; i<answer.length; i++){
        answer[i]+=answer[i-1];
    }
     
    return answer.map((el,idx)=>el+arr[idx]);
    
}