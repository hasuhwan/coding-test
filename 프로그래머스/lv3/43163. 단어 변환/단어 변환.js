function solution(begin, target, words) {
    if(!words.includes(target)){
        return 0;
    }
    const visited=new Array(words.length).fill(false);
    const queue=[[begin,0]];
    while(queue.length!==0){
        const [str,count]=queue.shift();
        if(str===target){
            return count;
        }
        words.forEach((temp,idx)=>{
            let diff=0;
            for(let i=0; i<temp.length; i++){
                if(temp[i]!==str[i]){
                    diff++;
                };
                if(diff>1){
                    break;
                }
            }
            if(diff===1&&visited[idx]===false){
                 visited[idx]=true;
            queue.push([temp,count+1]);
            }
        });
        
    }
    return 0;
}