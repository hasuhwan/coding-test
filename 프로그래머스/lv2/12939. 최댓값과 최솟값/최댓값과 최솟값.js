function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  const newArr = arr.sort((a, b) => Number(a) - Number(b));
  answer = `${newArr[0]} ${newArr[newArr.length - 1]}`;
  return answer;
}