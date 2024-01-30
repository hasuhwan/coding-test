function solution(array, height) {
    let answer=0;
    array.sort((a,b)=>a-b);
    let l=0;
    let r=array.length-1;
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        if(array[mid]>height){
            answer=array.length-mid;
            r=mid-1;
        }else{
            l=mid+1;
        }
    }
    return answer;
}