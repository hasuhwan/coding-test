function solution(survey, choices) {
  var answer = "";
  const obj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    const temp = survey[i].split("");
    if (choices[i] > 4) {
      obj[temp[1]] += choices[i] - 4;
    } else if (choices[i] === 4) {
      continue;
    } else {
      obj[temp[0]] += 4 - choices[i];
    }
  }
  const arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i][1] >= arr[i + 1][1]) {
      answer += arr[i][0];
    } else {
      answer += arr[i + 1][0];
    }
  }
  return answer;
}