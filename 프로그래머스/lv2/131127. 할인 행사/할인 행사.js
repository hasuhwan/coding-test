function solution(want, number, discount) {
  var answer = 0;
  let day = 0;
  const obj = {};
  for (let i = 0; i < want.length; i++) {
    obj[want[i]] = number[i];
  }
  while (day !== discount.length - 9) {
    const newObj = { ...obj };
    const keyArr = Object.keys(newObj);
    for (let i = day; i < day + 10; i++) {
      if (keyArr.includes(discount[i])) {
        newObj[discount[i]]--;
      }
    }
    const valueArr = Object.values(newObj);
    if (valueArr.every((ele) => ele === 0)) {
      answer++;
    }
    day++;
  }
  return answer;
}