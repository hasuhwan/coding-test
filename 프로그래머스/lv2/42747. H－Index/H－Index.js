function solution(citations) {
  var answer = 0;
  const arr = citations.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (i+1 > arr[i]) {
      return answer;
    } else {
      answer++;
    }
  }
  return answer;
}