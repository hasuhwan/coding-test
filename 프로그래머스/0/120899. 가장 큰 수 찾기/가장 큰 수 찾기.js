function solution(array) {
    return array.map((num,idx)=>[num,idx]).sort((a,b)=>b[0]-a[0])[0];
    
}