function solution(price, money, count) {
    var answer = 0;
    let sum=0;
    for(let i=1; i<=count; i++){
        sum+=price*i;
    }
const total=money-sum;
    return total>=0?0:-total;
}