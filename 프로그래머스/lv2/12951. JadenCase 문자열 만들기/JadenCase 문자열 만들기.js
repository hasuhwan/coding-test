function solution(s) {
  var answer = "";
  const arr = s.toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i][0])) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
  }
  answer = arr.join(" ");
  return answer;
}