function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const parentArr = new Array(n).fill(0).map((_, idx) => idx);
  function getParent(node) {
    if (parentArr[node] === node) {
      return node;
    } else {
        const currentParent=getParent(parentArr[node]);
        parentArr[node]=currentParent;
      return currentParent;
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