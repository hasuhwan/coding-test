function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    let a=0;
    let b=0;
    
    while(a!==A.length){
        if(A[a]===B[b]){
            a++;
            
        }else if(A[a]>B[b]){
            a++;
        }else{
            answer++;
            a++;
            b++;
        }
    }
    return answer;
}