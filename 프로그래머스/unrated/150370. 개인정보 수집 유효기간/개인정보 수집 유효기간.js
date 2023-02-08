function solution(today, terms, privacies) {
  const changeObj = {};
  function changeDays(arr) {
    return arr[0] * 12 * 28 + arr[1] * 28 + arr[2];
  }
  today = today.split(".").map((el) => Number(el));
  const days = changeDays(today);
  terms.forEach((el) => {
    const temp = el.split(" ");
    changeObj[temp[0]] = Number(temp[1]);
  });

  const newPrivacies = privacies
    .map((el, idx) => {
      const temp = el.split(" ");
      const due = changeObj[temp[1]];
      const change = temp[0].split(".").map((el, idx) => {
        if (idx === 1) {
          return Number(el) + due;
        } else {
          return Number(el);
        }
      });

      if (days - changeDays(change) >= 0) {
        return idx + 1;
      } else {
        return 0;
      }
    })
    .filter((el) => el !== 0);

  return newPrivacies;
}