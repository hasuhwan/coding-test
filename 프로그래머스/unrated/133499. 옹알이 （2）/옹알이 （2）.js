function solution(babbling) {
  var answer = 0;
  const arr = ["aya", "ye", "woo", "ma"];
  function dfs(str) {
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i].repeat(2))) return false;
      str = str.replaceAll(arr[i], "1");
      if (str.indexOf(arr[i]) === "1") {
        return false;
      }
      if (str.split("").every((el) => el === "1")) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < babbling.length; i++) {
    if (dfs(babbling[i])) {
      answer++;
    }
  }
  return answer;
}