function solution(n, k, enemy) {
    var answer = 0;
    let left=0;
    let right=enemy.length-1;
    let mid=Math.floor((left+right)/2);
    
    while(left<=right){
        const temp=enemy.slice(0,mid+1).sort((a,b)=>b-a).slice(k).reduce((acc,cur)=>acc+cur,0);
        const minus=n-temp;
       if(minus>=0){
            left=mid+1;
        }else{
            right=mid-1;
        }
        mid=Math.floor((left+right)/2);
    }
    return left;
}