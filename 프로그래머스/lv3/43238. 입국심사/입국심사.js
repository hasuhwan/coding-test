function solution(n, times) {
    let left=1;
    let right=n*times[times.length-1];
    let mid;
    let answer=right;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        let count=0;
        for(let i=0; i<times.length; i++){
            count+=Math.floor(mid/times[i]);
            if(count>=n){
                break;
            }
        }
        if(count<n){
            left=mid+1;
        }else{
            right=mid-1;
            answer=mid;
        }
    }
    return answer;
}