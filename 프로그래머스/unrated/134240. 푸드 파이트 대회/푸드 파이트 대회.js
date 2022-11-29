function solution(food) {
  var answer = "";
  let str = "";
  for (let i = 1; i < food.length; i++) {
    str += String(i).repeat(Math.floor(food[i] / 2));
  }
  answer = str.split("").concat(0).concat(str.split("").reverse()).join("");
  return answer;
}