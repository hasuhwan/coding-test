function solution(n, s, a, b, fares) {
  var answer = Infinity;
  const mat = new Array(n + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(Infinity));
  for (let i = 1; i < mat.length; i++) {
    mat[i][i] = 0;
  }
  fares.forEach((el) => {
    [one, two, cost] = el;
    mat[one][two] = cost;
    mat[two][one] = cost;
  });
  for (let i = 1; i < mat.length; i++) {
    for (let j = 1; j < mat.length; j++) {
      for (let k = 1; k < mat.length; k++) {
        mat[j][k] = Math.min(mat[j][k], mat[j][i] + mat[i][k]);
      }
    }
  }
  answer = mat[s][a] + mat[s][b];
  for (let i = 1; i < mat.length; i++) {
    const short = mat[s][i] + mat[i][a] + mat[i][b];
    answer = Math.min(answer, short);
  }
  return answer;
}
