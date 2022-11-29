function messure(number) {
  let count = 0;

  for (let i = 1; i < number + 1; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }
  if (count % 2 === 0) {
    return number;
  } else {
    return -number;
  }
}

function solution(left, right) {
  let answer = 0;
  for (let j = left; j < right + 1; j++) {
    answer = answer + messure(j);
  }

  return answer;
}
