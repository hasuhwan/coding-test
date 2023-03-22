function solution(enroll, referral, seller, amount) {
  var answer = [];
  const obj = {};
  enroll.forEach((el, idx) => {
    obj[el] = { up: referral[idx], value: 0 };
  });
  function dfs(temp, sell) {
    const nextValue = Math.floor(sell * 0.1);
    const nowValue = sell - nextValue;

    obj[temp].value += nowValue;
    if (obj[temp].up === "-" || nextValue === 0) {
      return;
    }
    dfs(obj[temp].up, nextValue);
  }
  seller.forEach((name, idx) => {
    dfs(name, amount[idx] * 100);
  });
  enroll.forEach((el) => {
    const value = obj[el].value;
    answer.push(value);
  });
  return answer;
}