function solution(park, routes) {
  let positon = [];
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        positon = [i, j];
        break;
      }
    }
    if (positon.length !== 0) {
      break;
    }
  }

  while (routes.length !== 0) {
    let bool = true;
    const temp = routes.shift().split(" ");
    const direction = temp[0];
    const nextP = Number(temp[1]);
    let [tempY, tempX] = positon;
    if (
      direction === "N" &&
      tempY - nextP >= 0 &&
      park[tempY - nextP][tempX] !== "X"
    ) {
      for (let i = tempY - 1; i >= tempY - nextP; i--) {
        if (park[i][tempX] === "X") {
          bool = false;
          break;
        }
      }
      if (bool) {
        tempY -= nextP;
      }
    } else if (direction === "S" && tempY + nextP < park.length) {
      for (let i = tempY + 1; i <= tempY + nextP; i++) {
        if (park[i][tempX] === "X") {
          bool = false;
          break;
        }
      }
      if (bool) {
        tempY += nextP;
      }
    } else if (direction === "E" && tempX + nextP < park[0].length) {
      for (let i = tempX + 1; i <= tempX + nextP; i++) {
        if (park[tempY][i] === "X") {
          bool = false;
          break;
        }
      }
      if (bool) {
        tempX += nextP;
      }
    } else if (direction === "W" && tempX - nextP >= 0) {
      for (let i = tempX - 1; i >= tempX - nextP; i--) {
        if (park[tempY][i] === "X") {
          bool = false;
          break;
        }
      }
      if (bool) {
        tempX -= nextP;
      }
    }
    positon = [tempY, tempX];
  }
  return positon;
}