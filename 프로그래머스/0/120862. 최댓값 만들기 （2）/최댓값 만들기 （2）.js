function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    const plus=[];
    const minus=[];
    let max=-Infinity;
    numbers.forEach(num=>{
        if(num>=0){
            plus.push(num);
        }else{
            minus.push(num);
        }
    });
    if(plus.length>=2){
        max=Math.max(max,plus[0]*plus[1]);
    }
    if(minus.length>=2){
        max=Math.max(max,minus[minus.length-1]*minus[minus.length-2]);
    }
    max=Math.max(max,numbers[0]*numbers[1]);
    return max;
}