function solution(num_list) {
    let mul=1;
    let sum=0;
    num_list.forEach(num=>{
        sum+=num;
        mul*=num;
    });
    return Math.pow(sum,2)>mul?1:0;
}