function solution(n) {
  var answer = 0;
  const arr = String(n).split("");
  answer = arr.reduce((pre, cur) => pre + Number(cur), 0);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
