function solution(numbers) {
  const answer = numbers.map((num) => {
    const newNum = num.toString(2);
    if (num % 2 === 0) {
      return parseInt(newNum.slice(0, newNum.length - 1) + 1, 2);
    } else {
      for (let i = newNum.length - 1; i >= 0; i--) {
        if (newNum[i] === "0") {
          return parseInt(newNum.slice(0, i) + 10 + newNum.slice(i + 2), 2);
        } else if (i === 0) {
          return parseInt(10 + newNum.slice(1), 2);
        }
      }
    }
  });
  return answer;
}