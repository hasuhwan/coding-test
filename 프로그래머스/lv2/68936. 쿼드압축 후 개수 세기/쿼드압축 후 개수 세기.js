function solution(arr) {
  var answer = [0, 0];

  const dfs = (arrSlice) => {
    const flat = arrSlice.flat();
    if (flat.every((el) => el === 1)) {
      answer[1]++;
    } else if (flat.every((el) => el === 0)) {
      answer[0]++;
    } else if (arrSlice.length === 2) {
      flat.forEach((el) => {
        if (el === 1) {
          answer[1]++;
        } else {
          answer[0]++;
        }
      });
    } else {
      const a = arrSlice.slice(0, arrSlice.length / 2);
      const b = arrSlice.slice(arrSlice.length / 2);

      dfs(a.map((el) => el.slice(0, a[0].length / 2)));
      dfs(b.map((el) => el.slice(0, b[0].length / 2)));
      dfs(a.map((el) => el.slice(a[0].length / 2)));
      dfs(b.map((el) => el.slice(b[0].length / 2)));
    }
  };
  dfs(arr);
  return answer;
}