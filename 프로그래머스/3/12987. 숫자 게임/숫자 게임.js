function solution(A, B) {
    var answer = 0;
    const n=A.length;
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    let i=0;
    let j=0;
    while(i<n&&j<n){
        if(B[i]>A[j]){
            answer++;
            i++;
            j++;
        }else{
            j++;
        }
    }
    return answer;
}