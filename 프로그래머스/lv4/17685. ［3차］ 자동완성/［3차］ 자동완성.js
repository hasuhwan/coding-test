function solution(words) {
  var answer = 0;
  const obj = {
    cnt: 0,
    child: {},
  };
  for (let i = 0; i < words.length; i++) {
    let temp = obj;
    temp.cnt++;
    for (let j = 0; j < words[i].length; j++) {
      if (!temp.child[words[i][j]]) {
        temp.child[words[i][j]] = {
          cnt: 0,
          child: {},
        };
      }
      temp = temp.child[words[i][j]];
      temp.cnt++;
    }
  }
  for (let i = 0; i < words.length; i++) {
    let temp = obj;
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      count++;
      temp = temp.child[words[i][j]];
      if (temp.cnt === 1 || j === words[i].length - 1) {
        answer += count;
        break;
      }
    }
  }
  return answer;
}