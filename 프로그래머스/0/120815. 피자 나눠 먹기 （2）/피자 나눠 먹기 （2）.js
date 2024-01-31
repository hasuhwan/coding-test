function solution(n) {
    function gcd(num1,num2){
        while(num2>0){
            [num1,num2]=[num2,num1%num2];
        }
        return num1;
    }
    
    return n/(n>6?gcd(n,6):gcd(6,n));
}