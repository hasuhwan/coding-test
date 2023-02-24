function solution(keymap, targets) {
  var answer = [];

  targets.forEach((str) => {
    let tempAnswer = 0;
    let pointer = 0;
    while (pointer !== str.length) {
      const index = keymap.reduce((acc, cur) => {
        const temp = cur.indexOf(str[pointer]);
        if (temp === -1) {
          return acc;
        }
        return acc > temp ? temp : acc;
      }, 100);
      if (index === 100) {
        answer.push(-1);
        return;
      }
      pointer++;
      tempAnswer += index + 1;
    }
    answer.push(tempAnswer);
  });

  return answer;
}