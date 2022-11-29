function solution(s) {
  const arr = new Set(
    JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
      .sort((a, b) => a.length - b.length)
      .flat()
  );
  return [...arr];
}