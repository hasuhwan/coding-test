function solution(id_list, report, k) {
  const userObj = {};
  const reportObj = {};
  for (let i = 0; i < id_list.length; i++) {
    userObj[id_list[i]] = 0;
  }
  const set = new Set(report);
  const reportArr = [...set].map((el) => {
    return el.split(" ");
  });
  reportArr.forEach((el) => {
    if (reportObj[el[1]] === undefined) {
      reportObj[el[1]] = 1;
    } else {
      reportObj[el[1]] += 1;
    }
  });
  const reportUserArr = [];
  for (const key in reportObj) {
    if (reportObj[key] >= k) {
      reportUserArr.push(key);
    }
  }
  reportUserArr.forEach((el) => {
    reportArr.forEach((user) => {
      if (user[1] === el) {
        userObj[user[0]] += 1;
      }
    });
  });
  return Object.values(userObj);
}