function solution(msg) {
  var answer = [];
  let word = "";
  const words = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (let i = 0; i < msg.length; i++) {
    word += msg[i];
    if (!words.includes(word)) {
      answer.push(words.indexOf(word.slice(0, word.length - 1)) + 1);
      words.push(word);
      word = "";
      i = i - 1;
    } else if (i === msg.length - 1) {
      answer.push(words.indexOf(word) + 1);
    }
  }
  return answer;
}