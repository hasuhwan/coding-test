function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  let group = [];
  let edgeCount = 0;
  function groupCheck(start, end) {
    const merge = [];
    for (let i = 0; i < group.length; i++) {
      const startCheck = group[i].includes(start);
      const endCheck = group[i].includes(end);
      if (startCheck && endCheck) {
        return false;
      } else if (startCheck && !endCheck) {
        merge.push([...group[i], end]);
        group.splice(i, 1);
        i -= 1;
      } else if (!startCheck && endCheck) {
        merge.push([...group[i], start]);
        group.splice(i, 1);
        i -= 1;
      } else {
        continue;
      }
    }
    if (merge.length === 2) {
      const set = [...new Set([...merge[0], ...merge[1]])];
      group.push(set);
    } else if (merge.length === 1) {
      group.push(merge[0]);
    } else if (merge.length === 0) {
      group.push([start, end]);
    }
  }

  for (let i = 0; i < costs.length; i++) {
    const [start, end, weight] = costs[i];
    const temp = groupCheck(start, end);
    if (temp === false) {
      continue;
    } else {
      answer += weight;
      edgeCount += 1;
    }
    if (edgeCount === n - 1) {
      return answer;
    }
  }
}