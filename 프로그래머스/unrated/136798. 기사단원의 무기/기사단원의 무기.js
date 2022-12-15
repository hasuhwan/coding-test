function solution(number, limit, power) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    let count = [];
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        count.push(j);
        if (!count.includes(i / j)) {
          count.push(i / j);
        }
      }
    }
    arr.push(count.length);
  }
  const answer = arr
    .map((el) => {
      if (el <= limit) {
        return el;
      } else {
        return power;
      }
    })
    .reduce((acc, cur) => acc + cur, 0);

  return answer;
}