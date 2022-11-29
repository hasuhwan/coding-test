function solution(elements) {
  var answer = [];
  const newElements = elements.concat(elements);
  for (let j = 1; j < newElements.length / 2 + 1; j++) {
    for (let i = 0; i < newElements.length / 2; i++) {
      answer.push(
        newElements.slice(i, i + j).reduce((acc, cur) => acc + cur, 0)
      );
    }
  }
  const set = new Set(answer);
  return set.size;
}