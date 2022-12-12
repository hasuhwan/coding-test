function solution(n) {
  let arr = new Array(n + 1);
  for (let i = 0; i < arr.length; i++) {
    if (i !== 2 && i % 2 === 0) {
      arr[i] = false;
    } else {
      arr[i] = i;
    }
  }
  arr[0] = false;
  arr[1] = false;
  for (let i = 3; i < arr.length; i += 2) {
    if (arr[i] === false) {
      continue;
    }
    for (let j = i * 2; j < arr.length; j += i) {
      arr[j] = false;
    }
  }
  return arr.filter((el) => el !== false).length;
}