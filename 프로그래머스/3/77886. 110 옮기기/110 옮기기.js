function solution(s) {
  return s.map((str) => {
    const stack = [];
    let addBackStr = "";
    for (let char of str) {
      if (stack.length >= 2) {
        if (
          char === "0" &&
          stack[stack.length - 2] === "1" &&
          stack[stack.length - 1] === "1"
        ) {
          addBackStr += "110";
          stack.pop();
          stack.pop();
          continue;
        }
      }
        stack.push(char);
    }
    let extraStr = stack.join("");
    const lastIdx = extraStr.lastIndexOf("0");
    return (
      extraStr.slice(0, lastIdx + 1) + addBackStr + extraStr.slice(lastIdx + 1)
    );
  });
}
