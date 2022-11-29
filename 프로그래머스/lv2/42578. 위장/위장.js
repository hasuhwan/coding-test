function solution(clothes) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (!obj[clothes[i][1]]) {
      obj[clothes[i][1]] = 2;
    } else {
      obj[clothes[i][1]]++;
    }
  }
  answer = Object.values(obj).reduce((acc, cur) => acc * cur, 1);
  return answer - 1;
}