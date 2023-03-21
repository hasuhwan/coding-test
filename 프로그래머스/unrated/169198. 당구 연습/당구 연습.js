function solution(m, n, startX, startY, balls) {
  var answer = [];
  balls.forEach((el) => {
    const [tempX, tempY] = el;
    let top, bottom, left, right;
    top = Math.pow(tempX - startX, 2) + Math.pow(2 * n - (tempY + startY), 2);
    bottom = Math.pow(tempX - startX, 2) + Math.pow(tempY + startY, 2);
    left = Math.pow(tempY - startY, 2) + Math.pow(tempX + startX, 2);
    right = Math.pow(tempY - startY, 2) + Math.pow(2 * m - (tempX + startX), 2);
    if (tempX === startX) {
      if (tempY > startY) {
        top = Infinity;
      } else {
        bottom = Infinity;
      }
    } else if (tempY === startY) {
      if (tempX > startX) {
        right = Infinity;
      } else {
        left = Infinity;
      }
    }
    answer.push(Math.min(top, bottom, left, right));
  });
  return answer;
}