function solution(number) {
    const sum=String(number).split("").reduce((acc,cur)=>acc+Number(cur),0);
    return sum%9;
}