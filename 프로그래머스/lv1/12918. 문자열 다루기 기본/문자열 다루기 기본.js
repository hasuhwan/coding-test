function solution(s) {
  var answer = true;
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((element)=> {
        return !isNaN(element);
    })
  } else {
    return !answer;
  }
}