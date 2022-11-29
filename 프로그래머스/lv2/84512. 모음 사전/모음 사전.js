function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  var answer = 0;
  let str = "";
  function dfs(str) {
    if (str === word) {
      return true;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (str.length < 5) {
          let newStr = str + arr[i];
          answer++;
          if (dfs(newStr) === true) {
            return true;
          }
        }
      }
    }
  }
  dfs(str);
  return answer;
}