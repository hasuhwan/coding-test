function solution(gems) {
  let answerArr = [0, 99999];
  const setSize = new Set(gems).size;
  const map = new Map();

  for (let i = 0; i < gems.length; i++) {
    map.delete(gems[i]);
    map.set(gems[i], i);
    if (map.size === setSize) {
      const temp = [map.values().next().value, i];
      if (answerArr[1] - answerArr[0] > temp[1] - temp[0]) {
        answerArr = temp;
      }
    }
  }
  return [answerArr[0] + 1, answerArr[1] + 1];
}