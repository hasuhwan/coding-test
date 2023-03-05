function solution(N, number) {
  const setArr = Array.from({ length: 8 }, (el) => new Set());
  setArr[0].add(N);
  if (setArr[0].has(number)) {
    return 1;
  }
  for (let i = 1; i < setArr.length; i++) {
    setArr[i].add(Number(String(N).repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      setArr[j].forEach((el) => {
        setArr[i - j - 1].forEach((el2) => {
          setArr[i]
            .add(el + el2)
            .add(el - el2)
            .add(el * el2)
            .add(Math.floor(el / el2));
        });
      });
    }
    if (setArr[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}