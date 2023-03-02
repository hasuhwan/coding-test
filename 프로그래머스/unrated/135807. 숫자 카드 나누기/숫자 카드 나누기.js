function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);
  function checkFunc(arr1, arr2) {
    for (let i = arr1[0]; i > 1; i--) {
      if (
        arr1.every((el) => el % i === 0) &&
        !arr2.some((el) => el % i === 0)
      ) {
        return i;
      }
    }
    return 0;
  }
  return Math.max(checkFunc(arrayA, arrayB), checkFunc(arrayB, arrayA));
}