function dfs(temp, str, index, list, length, tempArr) {
  str += temp;
  if (str.length === length) {
    if (list[str] !== undefined) {
      list[str]++;
    } else {
      list[str] = 1;
    }
  }
  for (let i = index + 1; i < tempArr.length; i++) {
    dfs(tempArr[i], str, i, list, length, tempArr);
  }
}

function solution(orders, course) {
  var answer = [];
  orders = orders.map((el) => el.split("").sort().join(""));
  for (let i = 0; i < course.length; i++) {
    const length = course[i];
    let list = {};
    orders.forEach((el) => {
      for (let j = 0; j < el.length; j++) {
        dfs(el[j], "", j, list, length, el);
      }
    });
    const max = Math.max(...Object.values(list));
    if (max >= 2) {
      const arr = Object.entries(list)
        .filter((el) => el[1] === max)
        .map((el) => el[0]);
      answer.push(...arr);
    }
  }

  return answer.sort();
}