function solution(begin, target, words) {
    const visited=new Array(words.length).fill(0);
    const queue=[[begin,0]];
    while(queue.length!==0){
        const [curr,count]=queue.shift();

        if(curr===target){
            return count;
        }
        words.forEach((word,idx)=>{
            if(visited[idx]){
                return;
            }
            let diff=0;
            for(let i=0; i<word.length; i++){
                if(word[i]!==curr[i]){
                    diff++;
                }
                if(diff>1){
                    return;
                }
            }
            visited[idx]=1;
            queue.push([word,count+1]);
        });
    }
    return 0;
}