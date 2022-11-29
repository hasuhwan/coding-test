function solution(n) {
  var answer = '';
  const cal = [4,1,2];
  while(n){
    answer = cal[n%3] + answer;
    n= n%3===0 ? n/3-1 : Math.floor(n/3);
  }
  return answer;
}