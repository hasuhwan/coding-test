function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const parentArr = new Array(n).fill(0).map((_, idx) => idx);
  function getParent(node) {
    if (parentArr[node] === node) {
      return node;
    } else {
      return getParent(parentArr[node]);
    }
  }
  function unionFind(a, b) {
    const one = getParent(a);
    const two = getParent(b);
    if (one === two) {
      return false;
    } else {
      if (one > two) {
        parentArr[one] = two;
      } else {
        parentArr[two] = one;
      }
      return true;
    }
  }
  for (let i = 0; i < costs.length; i++) {
    if (unionFind(costs[i][0], costs[i][1])) {
      answer += costs[i][2];
    }
  }
  return answer;
}