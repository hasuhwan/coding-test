function solution(book_time) {
  var answer = 1;
  const changeMinute = book_time
    .map((el) => {
      const [start, end] = el;
      const startArr = start.split(":").map((el) => Number(el));
      const endArr = end.split(":").map((el) => Number(el));
      return [startArr[0] * 60 + startArr[1], endArr[0] * 60 + endArr[1] + 10];
    })
    .sort((a, b) => a[0] - b[0]);
  let visited = [changeMinute[0]];
  for (let i = 1; i < changeMinute.length; i++) {
    const boolean = visited.some((el, idx) => {
      if (
        (changeMinute[i][0] >= el[1] && changeMinute[i][1] <= el[0]) ||
        (changeMinute[i][0] < el[0] && changeMinute[i][1] <= el[0]) ||
        (changeMinute[i][0] >= el[1] && changeMinute[i][1] > el[1])
      ) {
        visited.splice(idx, 1, changeMinute[i]);
        return true;
      } else {
        return false;
      }
    });

    if (boolean === false) {
      answer++;
      visited.push(changeMinute[i]);
    }
  }
  return answer;
}