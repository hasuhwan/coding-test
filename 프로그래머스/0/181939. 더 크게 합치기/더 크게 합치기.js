function solution(a, b) {
    const strA=String(a);
    const strB=String(b);
    const one=Number(strA+strB);
    const two=Number(strB+strA);
    return one>two?one:two;
    
}