function solution(N, road, K) {
  const dp = {};
  dp[1] = 0;
  const queue = [1];
  while (queue.length !== 0) {
    const temp = queue.shift();
    for (let i = 0; i < road.length; i++) {
      const sumTime = dp[temp] + road[i][2];
      if (
        road[i][0] === temp &&
        (dp[road[i][1]] === undefined || dp[road[i][1]] > sumTime) &&
        sumTime <= K
      ) {
        queue.push(road[i][1]);
        dp[road[i][1]] = sumTime;
      } else if (
        road[i][1] === temp &&
        (dp[road[i][0]] === undefined || dp[road[i][0]] > sumTime) &&
        sumTime <= K
      ) {
        queue.push(road[i][0]);
        dp[road[i][0]] = sumTime;
      }
    }
  }
  return Object.keys(dp).length;
}