function solution(A, B) {
  var answer = 0;
  const arrA = A.sort((a, b) => a - b);
  const arrB = B.sort((a, b) => b - a);
  answer = arrA.reduce((acc, cur, index) => (acc += cur * arrB[index]), 0);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
