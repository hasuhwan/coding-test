function solution(sizes) {
  let lotate = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));
  let width = [];
  let height = [];
  for (i = 0; i < lotate.length; i++) {
    width.push(lotate[i][0]);
    height.push(lotate[i][1]);
  }
  let answer = Math.max(...width) * Math.max(...height);
  return answer;
}