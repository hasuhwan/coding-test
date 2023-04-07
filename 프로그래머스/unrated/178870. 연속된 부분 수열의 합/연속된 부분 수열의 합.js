function solution(sequence, k) {
    var answer = [];
    let left=0;
    let right=0;
    let sum=sequence[left];
    while(right!==sequence.length){
      
        if(sum>k){
            sum=sum-sequence[right--]-sequence[left++];

        }else if(sum<k){
            sum+=sequence[++right];


        }else{
            answer.push([left,right]);
            sum=sum-sequence[left++]+sequence[++right];
        }
    }
const sorted=answer.sort((a,b)=>{
    const one=a[1]-a[0];
    const two=b[1]-b[0];
if(two>one){
    return -1;
}else{
    return 1;
}
})

    return sorted[0];
}