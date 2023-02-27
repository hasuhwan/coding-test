function solution(routes) {
  var answer = 1;
  routes.sort((a, b) => a[0] - b[0]);
  let temp = routes[0][1];
  routes.forEach((route) => {
    const [start, end] = route;
    if (temp >= start) {
      temp = Math.min(temp, end);
    } else {
      temp = end;
      answer++;
    }
  });
  return answer;
}