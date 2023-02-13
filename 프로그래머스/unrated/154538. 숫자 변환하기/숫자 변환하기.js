function solution(x, y, n) {
  if (x === y) {
    return 0;
  }
  const dp = {};
  const queue = [x];
  dp[x] = 0;
  while (queue.length !== 0) {
    const temp = queue.shift();
    const calArr = [temp + n, temp * 2, temp * 3];
    for (let i = 0; i < calArr.length; i++) {
      if (calArr[i] > y) {
        continue;
      } else if (calArr[i] === y) {
        return dp[temp] + 1;
      } else {
        if (dp[calArr[i]] === undefined) {
          dp[calArr[i]] = dp[temp] + 1;
          queue.push(calArr[i]);
        }
      }
    }
  }
  return -1;
}