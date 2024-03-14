function solution(n, m, x, y, r, c, k) {
  let grid = Array.from({ length: n + 1 }, () => new Array(m + 1).fill("."));

  grid[x][y] = "S";
  grid[r][c] = "E";

  let fastAnswer = k - (Math.abs(x - r) + Math.abs(y - c));
  if (fastAnswer < 0 || fastAnswer % 2 != 0) return "impossible";

  let d = [
    [1, 0], // d
    [0, -1], // l
    [0, 1], // r
    [-1, 0], // u
  ];

  // up/down 순서 거꾸로 주의
  // 최대한 d, l, r, u 순서대로 먼저 도는 게 빠르니까.
  let str = {
    0: "d",
    1: "l",
    2: "r",
    3: "u",
  };

  // let set = new Set();
  let answer = "z".repeat(k);

  function dfs(L, py, px, sum, dist) {
    if (L > k) return;
    if (dist > k) return; // 현재 거리가 목표지점에서 멀어지면 멈춘다.
    if (L === k && py === r && px === c) {
      // set.add(sum);
      if (answer > sum) {
        answer = sum;
        return;
      }
    }
    if (answer !== "z".repeat(k)) return;

    for (let i = 0; i < 4; i++) {
      dy = py + d[i][0];
      dx = px + d[i][1];

      // 편의상 index 0을 제거했으므로 dy, dx도 0보다 크거나 같은 게 아니라 무조건 커야 한다.
      if (dy <= n && dy > 0 && dx <= m && dx > 0) {
        // console.log(dy, dx, sum + str[i]);

        dfs(
          L + 1,
          dy,
          dx,
          sum + str[i],
          Math.abs(dy - r) + Math.abs(dx - c) + L + 1
        );
      }
    }
  }
  dfs(0, x, y, "", k);

  // if (set.size === 0) return "impossible";
  if (answer === "z".repeat(k)) return "impossible";

  return answer;

  // let arrFromSet = Array.from(set);
  // arrFromSet.sort();
  // return arrFromSet[0];
}