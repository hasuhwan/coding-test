function integralFunc(tempX, tempY, nextX, nextY) {
  const inclination = (nextY - tempY) / (nextX - tempX);
  const C = tempY - inclination * tempX;
  return (
    (inclination / 2) * Math.pow(nextX, 2) +
    C * nextX -
    ((inclination / 2) * Math.pow(tempX, 2) + C * tempX)
  );
}
function solution(k, ranges) {
  var answer = [];
  const coordinateArr = [];
  const areaArr = [];
  coordinateArr.push([0, k]);
  let count = 0;
  while (k !== 1) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = k * 3 + 1;
    }
    count++;
    coordinateArr.push([count, k]);
  }
  for (let i = 0; i < coordinateArr.length - 1; i++) {
    const [tempX, tempY] = coordinateArr[i];
    const [nextX, nextY] = coordinateArr[i + 1];
    areaArr.push(integralFunc(tempX, tempY, nextX, nextY));
  }
  ranges.forEach((el) => {
    let temp;
    const [start, end] = el;
    if (coordinateArr.length + end - 1 < start) {
      temp = -1;
    } else {
      temp = areaArr
        .slice(start, coordinateArr.length + end - 1)
        .reduce((acc, cur) => acc + cur, 0);
    }

    answer.push(temp.toFixed(1));
  });

  return answer;
}