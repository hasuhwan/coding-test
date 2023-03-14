function changeDateFunc(minute) {
  const hour = parseInt(minute / 60);
  const tempMinute = minute % 60;
  return (
    String(hour).padStart(2, "0") + ":" + String(tempMinute).padStart(2, "0")
  );
}

function solution(n, t, m, timetable) {
  var answer = "";
  const visited = [];
  timetable = timetable
    .map((el) => {
      const [hour, minute] = el.split(":");
      const temp = Number(hour) * 60 + Number(minute);
      return temp;
    })
    .sort((a, b) => a - b);
  let time = 540;
  while (n !== 0) {
    n -= 1;
    let count = 0;
    const tempArr = [];
    for (let i = 0; i < timetable.length; i++) {
      if (timetable[i] <= time) {
        count += 1;
        tempArr.push(timetable[i]);
      }
      if (count === m) {
        break;
      }
    }
    visited.push(tempArr);
    timetable = timetable.slice(count);

    if (n === 0 && visited[visited.length - 1].length < m) {
      return changeDateFunc(time);
    } else if (n === 0 && visited[visited.length - 1].length === m) {
      const answerTemp = visited[visited.length - 1];
      return changeDateFunc(answerTemp[answerTemp.length - 1] - 1);
    }
    time += t;
  }
  return answer;
}