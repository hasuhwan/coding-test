function solution(arr) {
    function getGcd(a,b){
        return b>0?getGcd(b,a%b):a;
    }
    return arr.reduce((acc,cur)=>{
       const gcd=getGcd(acc,cur);
        return acc*cur/gcd;
    },1);

}

