function solution(places) {
  var answer = [];
  places.forEach((tempArr) => {
    const person = [];
    for (let i = 0; i < tempArr.length; i++) {
      for (let j = 0; j < tempArr[0].length; j++) {
        if (tempArr[i][j] === "P") {
          person.push([i, j]);
        }
      }
    }
    while (person.length !== 0) {
      const [tempPersonX, tempPersonY] = person.shift();
      for (let i = 0; i < person.length; i++) {
        const disX = Math.abs(person[i][0] - tempPersonX);
        const disY = Math.abs(person[i][1] - tempPersonY);

        if (disY + disX === 1) {
          answer.push(0);
          return;
        } else if (disY + disX === 2) {
          if (
            disX === 0 &&
            disY !== 0 &&
            tempArr[tempPersonX][(tempPersonY + person[i][1]) / 2] !== "X"
          ) {
            answer.push(0);
            return;
          } else if (
            disY === 0 &&
            disX !== 0 &&
            tempArr[(tempPersonX + person[i][0]) / 2][tempPersonY] !== "X"
          ) {
            answer.push(0);
            return;
          } else if (
            disX !== 0 &&
            disY !== 0 &&
            (tempArr[tempPersonX][person[i][1]] !== "X" ||
              tempArr[person[i][0]][tempPersonY] !== "X")
          ) {
            answer.push(0);
            return;
          }
        }
      }
    }
    answer.push(1);
  });
  return answer;
}