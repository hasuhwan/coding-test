function solution(scores) {
    var answer = 0;
    const [frontW,backW]=scores[0];
    scores.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]-b[1];
        }else{
            return b[0]-a[0];
        }
    })
    
    let limitB=0;
    for(const [front,back] of scores){
        if(front>frontW && back>backW){
            return -1;
        }
        if(limitB<=back){
            if(frontW+backW<front+back){
                    answer++;
            }
              limitB=back; 
        }
    }
    return answer+1;
}