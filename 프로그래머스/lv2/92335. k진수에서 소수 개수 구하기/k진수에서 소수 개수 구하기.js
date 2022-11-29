function primeNumber(num) {
  console.log(num);
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function solution(n, k) {
  var answer = 0;
  const str = n.toString(k) + 0;
  let numStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      numStr += str[i];
    } else {
      primeNumber(Number(numStr)) ? answer++ : null;
      numStr = "";
    }
  }
  console.log(answer);
  return answer;
}