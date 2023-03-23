function solution(numbers) {
  var answer = [];
  function binarySearch(arr, start, end) {
    const mid = Math.floor((start + end) / 2);
    const leftCenter = Math.floor((start + mid - 1) / 2);
    const rightCenter = Math.floor((end + mid + 1) / 2);
    if (start === end) {
      return true;
    }
    if (
      arr[mid] === "0" &&
      (arr[leftCenter] === "1" || arr[rightCenter] === "1")
    ) {
      return false;
    }
    if (!binarySearch(arr, start, mid - 1)) {
      return false;
    }
    if (!binarySearch(arr, mid + 1, end)) {
      return false;
    }
    return true;
  }
  const numbersArr = numbers.map((num) => {
    const str = num.toString(2);

    const length = str.length;

    const k = length.toString(2).length;
    const pluslength = Math.pow(2, k) - 1 - length;
    const plusStr = "0".repeat(pluslength) + str;
    return plusStr.split("");
  });
  numbersArr.forEach((el) => {
    if (binarySearch(el, 0, el.length - 1)) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });
  return answer;
}