//동적 계획법 이용
// 첫째집을 털 경우 와 첫째집을 털지 않을 경우로 나눈다.
//즉, dp 배열은 2개가 필요하다.
// 누적합으로 계산해야 한다.
function solution(money) {
    const len=money.length;
    const dpFirst=new Array(len).fill(0);
    const dpLast=new Array(len).fill(0);
    dpFirst[0]=money[0];
    dpFirst[1]=money[0];
    for(let i=2; i<len-1; i++){
        dpFirst[i]=Math.max(dpFirst[i-2]+money[i],dpFirst[i-1]);
    }
    dpLast[1]=money[1];
    for(let i=2; i<len; i++){
        dpLast[i]=Math.max(dpLast[i-2]+money[i],dpLast[i-1]);
    }
    return Math.max(dpFirst[len-2],dpLast[len-1]);
}