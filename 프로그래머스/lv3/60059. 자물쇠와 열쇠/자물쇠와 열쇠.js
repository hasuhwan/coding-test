function solution(key, lock) {
    if(lock.every(el=>el.every(v=>v===1))){
        return true;
    }
  function findIndex(arr, num) {
    const index = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] === num) {
          index.push([i, j]);
        }
      }
    }
    return index;
  }
  let keyIndex = findIndex(key, 1);
  let holeIndex = findIndex(lock, 0);
  const [startY, startX] = holeIndex[0];
  let time = 0;
  function rotateFunc(arr) {
    const rot = new Array(arr.length)
      .fill(0)
      .map(() => new Array(arr.length).fill(0));

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        rot[j][arr.length - 1 - i] = arr[i][j];
      }
    }
    return rot;
  }
  let rotate = key;
  while (time <= 3) {
    for (let i = 0; i < keyIndex.length; i++) {
      let tempK = [...keyIndex];
      let tempL = lock.map((el) => el.map((v) => v));
      const [Y, X] = keyIndex[i];
      const [gapY, gapX] = [startY - Y, startX - X];
      tempK = tempK.map((el) => {
        return [el[0] + gapY, el[1] + gapX];
      });
      let bool = true;
      for (let j = 0; j < tempK.length; j++) {
        const [keyY, keyX] = tempK[j];
        if (keyY < 0 || keyY >= lock.length || keyX < 0 || keyX >= lock.lengh) {
          continue;
        } else if (tempL[keyY][keyX] === 1) {
          bool = false;
          break;
        } else {
          tempL[keyY][keyX] = 1;
        }
      }
      if (bool === true && tempL.flat().every((el) => el === 1)) {
        return true;
      }
    }
    rotate = rotateFunc(rotate);
    keyIndex = findIndex(rotate, 1);
    time++;
  }
  return false;
}