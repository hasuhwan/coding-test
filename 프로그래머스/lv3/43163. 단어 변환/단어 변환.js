function solution(begin, target, words) {
    var answer = 0;
    if(!words.includes(target)){
        return 0;
    }
    const queue=[[begin,0]];
    const visited=[];
    while(queue.length!==0){
        const [temp,count]=queue.shift();
        if(temp===target){
            return count;
        }
        for(let i=0; i<words.length; i++){
            let diff=0;
            if(!visited.includes(words[i])){
                
                for(let j=0; j<begin.length; j++){
                if(temp[j]!==words[i][j]){
                    diff++;
                    if(diff>1){
                        break;
                    }
                }
            }
            }
            if(diff===1){
                queue.push([words[i],count+1]);
                visited.push([words[i]]);
            }
            
        }
    }
    return answer;
}