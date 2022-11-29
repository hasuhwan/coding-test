function solution(n, words) {
  var answer = [0, 0];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let p = (i % n) + 1;
    let turn = Math.ceil((i + 1) / n);

    if (i > 0) {
      let last = words[i - 1].slice(-1);
      console.log(last);
      if (i > words.indexOf(word) || last !== word[0]) {
        answer = [p, turn];
        break;
      }
    }
  }
  return answer;
}