function solution(fees, records) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < records.length; i++) {
    const newArr = records[i].split(" ");
    const splitTime = newArr[0].split(":").map((str) => Number(str));
    if (obj[newArr[1]] === undefined) {
      obj[newArr[1]] = [];
      if (newArr[2] === "IN") {
        obj[newArr[1]][0] = -(splitTime[0] * 60 + splitTime[1]);
        obj[newArr[1]][1] = "IN";
      }
    } else {
      if (newArr[2] === "IN") {
        obj[newArr[1]][1] = "IN";
        obj[newArr[1]][0] -= splitTime[0] * 60 + splitTime[1];
      } else {
        obj[newArr[1]][1] = "OUT";
        obj[newArr[1]][0] += splitTime[0] * 60 + splitTime[1];
      }
    }
  }
  console.log(obj);
  const keys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]][1] === "IN") {
      obj[keys[i]][0] += 23 * 60 + 59;
      if (fees[0] >= obj[keys[i]][0]) {
        answer.push(fees[1]);
      } else {
        answer.push(
          fees[1] + Math.ceil((obj[keys[i]][0] - fees[0]) / fees[2]) * fees[3]
        );
      }
    } else {
      if (fees[0] >= obj[keys[i]][0]) {
        answer.push(fees[1]);
      } else {
        answer.push(
          fees[1] + Math.ceil((obj[keys[i]][0] - fees[0]) / fees[2]) * fees[3]
        );
      }
    }
  }

  console.log(answer);
  return answer;
}

solution(
  [180, 5000, 10, 600],
  [
    "05:34 5961 IN",
    "06:00 0000 IN",
    "06:34 0000 OUT",
    "07:59 5961 OUT",
    "07:59 0148 IN",
    "18:59 0000 IN",
    "19:09 0148 OUT",
    "22:59 5961 IN",
    "23:00 5961 OUT",
  ]
);
