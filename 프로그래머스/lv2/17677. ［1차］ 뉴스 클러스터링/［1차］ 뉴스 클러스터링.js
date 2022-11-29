const filter = (arr) => {
  const regexp = new RegExp(/[a-z]{2}/, "gi");
  return arr
    .filter((ele) => {
      return ele.match(regexp);
    })
    .map((ele) => ele.toUpperCase());
};
const result = (arr1, arr2) => {
  const copyArr = [...arr2];
  return arr1.filter((ele) => {
    if (copyArr.indexOf(ele) !== -1) {
      copyArr.splice(copyArr.indexOf(ele), 1);
      return true;
    }
  });
};
const result2 = (arr1, arr2) => {
  const copyArr = [...arr2];

  return arr1
    .filter((ele) => {
      if (copyArr.indexOf(ele) !== -1) {
        copyArr.splice(copyArr.indexOf(ele), 1);
        return true;
      } else {
        return true;
      }
    })
    .concat(copyArr);
};
function solution(str1, str2) {
  const arr1 = [];
  const arr2 = [];
  let count;
  str1.length > str2.length ? (count = str1.length) : (count = str2.length);
  for (let i = 0; i < count - 1; i++) {
    if (i > str1.length - 2) {
      arr2.push(str2[i] + str2[i + 1]);
    } else if (i > str2.length - 2) {
      arr1.push(str1[i] + str1[i + 1]);
    } else {
      arr1.push(str1[i] + str1[i + 1]);
      arr2.push(str2[i] + str2[i + 1]);
    }
  }
  const newArr1 = filter(arr1);
  const newArr2 = filter(arr2);
  const intersectionArr = result(newArr1, newArr2);
  const unionArr = result2(newArr1, newArr2);

  if (intersectionArr.length === 0 && unionArr.length === 0) {
    return 65536;
  } else {
    return Math.floor((intersectionArr.length / unionArr.length) * 65536);
  }
}