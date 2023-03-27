function solution(picks, minerals) {
  var answer = Infinity;
  minerals = minerals.map((el) => {
    if (el === "diamond") {
      return 25;
    } else if (el === "iron") {
      return 5;
    } else {
      return 1;
    }
  });
  picks = picks
    .map((el, idx) => {
      if (idx === 0) {
        return ["diamond", el];
      } else if (idx === 1) {
        return ["iron", el];
      } else {
        return ["stone", el];
      }
    })
    .filter((el) => el[1] !== 0);
  function dfs(temp, depth) {
    const filter = picks.filter((el) => el[1] !== 0);
    if (filter.length === 0 || depth === Math.ceil(minerals / 5) - 1) {
      answer = answer > temp ? temp : answer;
      return;
    }
    for (let i = 0; i < filter.length; i++) {
      const curArr = minerals.slice(depth * 5, (depth + 1) * 5);
      let div;
      if (filter[i][0] === "diamond") {
        div = 25;
      } else if (filter[i][0] === "iron") {
        div = 5;
      } else {
        div = 1;
      }
      let tempPiro =
        curArr.reduce((acc, cur) => {
          return acc + Math.ceil(cur / div);
        }, 0) + temp;
      filter[i][1]--;
      dfs(tempPiro, depth + 1);
      filter[i][1]++;
    }
  }
  for (let i = 0; i < picks.length; i++) {
    const curArr = minerals.slice(0, 5);
    let div;
    if (picks[i][0] === "diamond") {
      div = 25;
    } else if (picks[i][0] === "iron") {
      div = 5;
    } else {
      div = 1;
    }
    let tempPiro = curArr.reduce((acc, cur) => {
      return acc + Math.ceil(cur / div);
    }, 0);
    picks[i][1]--;
    dfs(tempPiro, 1);
    picks[i][1]++;
  }
  return answer;
}