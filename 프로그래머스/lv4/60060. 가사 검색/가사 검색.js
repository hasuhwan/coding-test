function solution(words, queries) {
  const answer = [];
  const reverseWords = words.map((str) => str.split("").reverse().join(""));
  const frontObj = { len: new Map(), next: {} };
  const backObj = { len: new Map(), next: {} };
  const checkDuplicateObj = new Map();

  function storeWords(words, obj) {
    words.forEach((str) => {
      const strLength = str.length;
      let idx = 0;
      const length = str.length - 1;
      let start = obj;
      if (start.len.has(strLength)) {
        start.len.set(strLength, start.len.get(strLength) + 1);
      } else {
        start.len.set(strLength, 1);
      }
      while (idx < length) {
        const tempStr = str[idx];
        const extra = length - idx;

        if (!start.next[tempStr]) {
          start.next[tempStr] = {
            len: new Map(),
            next: {},
          };
        }

        if (start.next[tempStr].len.has(extra)) {
          start.next[tempStr].len.set(
            extra,
            start.next[tempStr].len.get(extra) + 1
          );
        } else {
          start.next[tempStr].len.set(extra, 1);
        }

        start = start.next[tempStr];
        idx++;
      }
    });
  }

  storeWords(words, frontObj);
  storeWords(reverseWords, backObj);

  function checkQuery(str) {
    let temp = str.replace(/\?/g, "");
    const questionCount = str.length - temp.length;
    let start;

    if (str[0] !== "?") {
      start = frontObj;
    } else {
      temp = temp.split("").reverse().join("");
      start = backObj;
    }

    for (let i = 0; i < temp.length; i++) {
      const tempStr = temp[i];
      if (!start.next[tempStr]) {
        return 0;
      } else {
        start = start.next[tempStr];
      }
    }
    const result = start.len.get(questionCount) || 0;
    checkDuplicateObj.set(str, result);
    return result;
  }

  queries.forEach((query) => {
    answer.push(checkDuplicateObj.get(query) || checkQuery(query));
  });

  return answer;
}

