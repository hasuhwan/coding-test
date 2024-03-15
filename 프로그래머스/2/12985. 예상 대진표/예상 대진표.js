function solution(n, a, b) {
  var answer = 1;
while(Math.abs(a-b)!==1|| Math.min(a, b) % 2 === 0){
    a=Math.ceil(a/2);
    b=Math.ceil(b/2);
    answer++;
}
  return answer;
}
