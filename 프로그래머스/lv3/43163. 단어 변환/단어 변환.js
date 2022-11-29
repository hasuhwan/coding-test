function solution(begin, target, words) {
  var answer = 0;
  const visited = [];
  const queue = [];
  if (!words.includes(target)) return 0;
  queue.push([begin, answer]);
  while (queue) {
    let [curWord, count] = queue.shift();

    if (curWord === target) {
      return count;
    }
    words.forEach((word) => {
      let notEqual = 0;
      if (visited.includes(word)) {
        return;
      }
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== curWord[i]) {
          notEqual++;
        }
      }
      if (notEqual === 1) {
        queue.push([word, ++count]);
        visited.push(word);
      }
    });
  }
  return answer;
}