function solution(s) {
  var answer = 0;
  const arr = s.split("");
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];
  for (let i = 0; i < arr.length; i++) {
    let bool = true;
    const visited = [];
    const newArr = arr.slice(i).concat(arr.slice(0, i));
    for (let j = 0; j < newArr.length; j++) {
      if (close.includes(newArr[j])) {
        if (open[close.indexOf(newArr[j])] !== visited[visited.length - 1]) {
          bool = false;
          break;
        } else {
          visited.pop();
        }
      } else {
        visited.push(newArr[j]);
      }
    }
    if (bool === true && visited.length === 0) {
      answer++;
    }
  }
  return answer;
}