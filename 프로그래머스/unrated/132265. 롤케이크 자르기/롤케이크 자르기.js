function solution(topping) {
  var answer = 0;
  const firstMap = new Map();
  const secondMap = new Map();
  topping.forEach((el) => {
    if (secondMap.has(el)) {
      const value = secondMap.get(el);
      secondMap.set(el, value + 1);
    } else {
      secondMap.set(el, 1);
    }
  });
  topping.forEach((el) => {
    if (firstMap.has(el)) {
      const value = firstMap.get(el);
      firstMap.set(el, value + 1);
    } else {
      firstMap.set(el, 1);
    }
    const value = secondMap.get(el);
    if (value - 1 === 0) {
      secondMap.delete(el);
    } else {
      secondMap.set(el, value - 1);
    }
    if (firstMap.size === secondMap.size) {
      answer++;
    }
  });

  return answer;
}