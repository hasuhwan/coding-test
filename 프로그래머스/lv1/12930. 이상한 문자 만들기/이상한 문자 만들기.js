function solution(s) {
  var answer = [];
  const ans = s.split(" ");
  for (let i = 0; i < ans.length; i++) {
    answer.push(
      ans[i]
        .split("")
        .map((str, index) =>
          index % 2 ? str.toLowerCase() : str.toUpperCase()
        )
        .join("")
    );
  }

  return answer.join(" ");
}
