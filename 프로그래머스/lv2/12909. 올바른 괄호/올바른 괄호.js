//l l r r
function solution(s) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      count++;
    } else if (s[i] === ")" && stack.length === 0) {
      return false;
    } else {
      stack.pop();
      count--;
    }
  }
  return count === 0 ? true : false;
}
