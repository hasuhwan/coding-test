function solution(new_id) {
  let str = new_id
    .toLowerCase()
    .replace(/[^\w|\-|_|.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  return str.length > 2
    ? str
    : str + str[str.length - 1].repeat(3 - str.length);
}