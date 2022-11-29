function solution(strings, n) {
  strings.sort((a, b) => {
    return a[n] > b[n] ? 1 : a[n] < b[n] ? -1 : a.localeCompare(b);
  });
  return strings;
}