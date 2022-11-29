function solution(numbers, hand) {
  var answer = "";
  const obj = {
    1: { x: 0, y: 3 },
    2: { x: 1, y: 3 },
    3: { x: 2, y: 3 },
    4: { x: 0, y: 2 },
    5: { x: 1, y: 2 },
    6: { x: 2, y: 2 },
    7: { x: 0, y: 1 },
    8: { x: 1, y: 1 },
    9: { x: 2, y: 1 },
    preLeft: { x: 0, y: 0 },
    0: { x: 1, y: 0 },
    preRight: { x: 2, y: 0 },
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      obj.preLeft = obj[numbers[i]];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      obj.preRight = obj[numbers[i]];
    } else {
      const leftLength =
        Math.abs(obj.preLeft.x - obj[numbers[i]].x) +
        Math.abs(obj.preLeft.y - obj[numbers[i]].y);
      const rightLength =
        Math.abs(obj.preRight.x - obj[numbers[i]].x) +
        Math.abs(obj.preRight.y - obj[numbers[i]].y);
      if (leftLength > rightLength) {
        answer += "R";
        obj.preRight = obj[numbers[i]];
      } else if (leftLength < rightLength) {
        answer += "L";
        obj.preLeft = obj[numbers[i]];
      } else {
        if (hand === "right") {
          answer += "R";
          obj.preRight = obj[numbers[i]];
        } else {
          answer += "L";
          obj.preLeft = obj[numbers[i]];
        }
      }
    }
  }
  return answer;
}