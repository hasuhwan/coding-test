function solution(arr) {
  let lcd = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lcd = (lcd * arr[i]) / gcd(lcd, arr[i]);
    console.log(lcd);
  }
  return lcd;
}

function gcd(a, b) {
  if (a > b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  } else {
    if (a === 0) {
      return b;
    } else {
      return gcd(a, b % a);
    }
  }
}