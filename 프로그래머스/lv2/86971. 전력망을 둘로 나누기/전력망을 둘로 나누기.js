function solution(n, wires) {
  var answer = 100;
  function dfs(temp, arr, group) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i][0] === temp && !group.includes(arr[i][1])) {
        group.push(arr[i][1]);
        dfs(arr[i][1], arr, group);
      } else if (arr[i][1] === temp && !group.includes(arr[i][0])) {
        group.push(arr[i][0]);
        dfs(arr[i][0], arr, group);
      }
    }
  }

  for (let i = 0; i < wires.length; i++) {
    const tempArr = wires.slice(0, i).concat(wires.slice(i + 1));
    const startArr = [tempArr[0][0], tempArr[0][1]];
    dfs(tempArr[0][0], tempArr, startArr);
    dfs(tempArr[0][1], tempArr, startArr);
    const temp = Math.abs(n - startArr.length - startArr.length);
    answer = answer > temp ? temp : answer;
  }
  return answer;
}