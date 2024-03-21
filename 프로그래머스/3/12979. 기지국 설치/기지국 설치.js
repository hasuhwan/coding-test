function solution(n, stations, w) {
    var answer = 0;
    let idx=1;
    stations.forEach((mid)=>{
        const min=mid-w;
        const max=mid+w;
        while(idx<min){
            idx+=2*w+1;
            
            answer++;
        }
        idx=max+1;
    })
    while(idx<=n){
        idx+=2*w+1;
        answer++;
    }
    return answer;
}