function solution(a, b, flag) {
    const arr=[a+b,a-b];
    return flag?arr[0]:arr[1];
}