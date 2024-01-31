function solution(age) {
    return String(age).split("").map(num=>String.fromCharCode(Number(num)+97)).join("");
}