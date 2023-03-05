function solution(wallpaper) {
  var answer = [];
  const upDown = [];
  const leftRight = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        upDown.push(i);
        leftRight.push(j);
      }
    }
  }
  answer.push(Math.min(...upDown));
  answer.push(Math.min(...leftRight));
  answer.push(Math.max(...upDown) + 1);
  answer.push(Math.max(...leftRight) + 1);
  return answer;
}