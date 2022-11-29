function solution(files) {
  var answer = [];
  const arr = files.map((el) => {
    const body = el.match(/[0-9]+/)[0];
    const head = el.slice(0, el.indexOf(body[0]));
    const tail = el.slice(head.length + body.length);
    return [head, body, tail];
  });
  answer = arr
    .sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      } else {
        if (Number(a[1]) >= Number(b[1])) {
          return 1;
        } else return -1;
      }
    })
    .map((el) => el.join(""));
  return answer;
}