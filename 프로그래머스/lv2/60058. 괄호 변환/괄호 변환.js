function solution(p) {
  var answer = "";
  function divide(str) {
    if (str === "") {
      return "";
    }
    const checkArr = [];
    let bool = true;
    let forStr = "";
    let backStr = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        count += 1;
      } else {
        count -= 1;
      }
      if (count === 0) {
        forStr = str.slice(0, i + 1);
        backStr = str.slice(i + 1);
        for (let i = 0; i < forStr.length; i++) {
          const lastStr = checkArr[checkArr.length - 1];
          if (forStr[i] === "(") {
            checkArr.push("(");
          } else if (forStr[i] === ")" && lastStr === "(") {
            checkArr.pop();
          } else {
            bool = false;
            break;
          }
        }
        break;
      }
    }

    if (bool === true) {
      return forStr + divide(backStr);
    } else {
      const reverse = forStr
        .slice(1, forStr.length - 1)
        .split("")
        .map((el) => {
          if (el === "(") {
            return ")";
          } else {
            return "(";
          }
        })
        .join("");
      return "(" + divide(backStr) + ")" + reverse;
    }
  }
  answer = divide(p);
  return answer;
}