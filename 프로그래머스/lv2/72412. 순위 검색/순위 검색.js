function solution(info, query) {
  var answer = [];
  const obj = {};
  info.forEach((el) => {
    const temp = el.split(" ");
    const num = Number(temp.pop());
    const str = temp.join("");
    if (obj[str] === undefined) {
      obj[str] = [num];
    } else {
      obj[str].push(num);
      obj[str].sort((a, b) => a - b);
    }
  });
  const objKey = Object.keys(obj);
  function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
      if (arr[mid] >= num) {
        right = mid;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
    return arr.length - left;
  }
  query.forEach((el) => {
    const temp = el.replace(/ and |-/g, " ").split(" ");
    const number = Number(temp.pop());
    let count = 0;
    objKey.forEach((str) => {
      if (temp.every((el) => str.includes(el))) {
        count += binarySearch(obj[str], number);
      }
    });
    answer.push(count);
  });

  return answer;
}