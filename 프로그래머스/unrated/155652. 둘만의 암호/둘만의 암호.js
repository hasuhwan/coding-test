function solution(s, skip, index) {
  var answer = "";
  let str = "";
  for (let i = 97; i < 123; i++) {
    str += String.fromCharCode(i);
  }
  for (let i = 0; i < skip.length; i++) {
    str = str.replace(skip[i], "");
  }
  const alphabetArr = str.repeat(3);
  for (let i = 0; i < s.length; i++) {
    answer += alphabetArr[alphabetArr.indexOf(s[i]) + index];
  }
  return answer;
}