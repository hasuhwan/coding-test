function solution(a, b) {
  var answer = "";
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const shot = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let day = b;
  for (let i = 1; i < a; i++) {
    day += monthDay[i - 1];
  }
  answer = shot[day % 7];
  console.log(answer);
  return answer;
}