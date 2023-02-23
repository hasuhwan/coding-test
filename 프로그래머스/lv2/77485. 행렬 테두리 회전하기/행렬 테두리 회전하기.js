function solution(rows, columns, queries) {
  var answer = [];
  const arr = Array.from({ length: rows }, (el, idx) => {
    return Array.from({ length: columns }, (el, idx2) => {
      return idx * columns + idx2 + 1;
    });
  });
  queries.forEach((el) => {
    const changeEl = [];
    let changeidx = [];
    const [leftMin, rightMin, leftMax, rightMax] = [
      el[0] - 1,
      el[1] - 1,
      el[2] - 1,
      el[3] - 1,
    ];
    for (let i = rightMin; i <= rightMax; i++) {
      changeidx.push([leftMin, i]);
      changeEl.push(arr[leftMin][i]);
    }
    for (let i = leftMin + 1; i < leftMax; i++) {
      changeidx.push([i, rightMax]);
      changeEl.push(arr[i][rightMax]);
    }
    for (let i = rightMax; i >= rightMin; i--) {
      changeidx.push([leftMax, i]);
      changeEl.push(arr[leftMax][i]);
    }
    for (let i = leftMax - 1; i > leftMin; i--) {
      changeidx.push([i, rightMin]);
      changeEl.push(arr[i][rightMin]);
    }
    answer.push(Math.min(...changeEl));
    changeidx = changeidx.slice(1).concat(changeidx.slice(0, 1));
    changeidx.forEach((el, idx) => {
      const [x, y] = el;
      arr[x][y] = changeEl[idx];
    });
  });
  return answer;
}