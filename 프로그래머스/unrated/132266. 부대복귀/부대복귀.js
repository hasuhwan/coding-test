function solution(n, roads, sources, destination) {
    var answer = [];
    const countArr=new Array(n+1).fill(-1);
    countArr[destination]=0;
      const obj={};
  for(let i=0; i<roads.length; i++){
      const [one,two]=roads[i];
      if(obj[one]){
      obj[one].push(two);
      }else if(obj[one]===undefined){
          obj[one]=[two];
      }
            if(obj[two]){
      obj[two].push(one);
      }else if(obj[two]===undefined){
          obj[two]=[one];
      }
  }
    const queue=[[obj[destination],1]];
    while(queue.length!==0){
        const [tempArr,count]=queue.shift();
        for(let i=0; i<tempArr.length; i++){
            if(countArr[tempArr[i]]===-1){
                countArr[tempArr[i]]=count;
                queue.push([obj[tempArr[i]],count+1]);
            }
        }
    }
for(let i=0; i<sources.length; i++){
    answer.push(countArr[sources[i]]);
}
    
    return answer;
}