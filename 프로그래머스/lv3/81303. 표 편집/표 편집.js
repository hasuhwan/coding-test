class Node {
  constructor(idx) {
    this.temp = idx;
    this.prev = null;
    this.next = null;
  }
}
function solution(n, k, cmd) {
  var answer = Array.from({ length: n }, () => "O");
  const linkArr = Array.from({ length: n }, (_, idx) => {
    const temp = new Node(idx);
    if (idx > 0) {
      temp.prev = idx - 1;
    }
    if (idx < n - 1) {
      temp.next = idx + 1;
    }
    return temp;
  });
  const deleteArr = [];
  let pointer = k;
  for (let i = 0; i < cmd.length; i++) {
    let [first, second] = cmd[i].split(" ");
    if (first === "D") {
      while (second !== 0) {
        second--;
        pointer = linkArr[pointer].next;
      }
    } else if (first === "U") {
      while (second !== 0) {
        second--;
        pointer = linkArr[pointer].prev;
      }
    } else if (first === "C") {
      deleteArr.push(linkArr[pointer]);
      const { prev, next } = linkArr[pointer];
      if (linkArr[prev]) {
        linkArr[prev].next = next;
      }
      if (linkArr[next]) {
        linkArr[next].prev = prev;
      }

      if (next !== null) {
        pointer = next;
      } else {
        pointer = prev;
      }
    } else {
      const { temp, prev, next } = deleteArr.pop();

      if (linkArr[prev]) {
        linkArr[prev].next = temp;
      }
      if (linkArr[next]) {
        linkArr[next].prev = temp;
      }
    }
  }

  for (let i = 0; i < deleteArr.length; i++) {
    const { temp } = deleteArr[i];
    answer[temp] = "X";
  }
  return answer.join("");
}