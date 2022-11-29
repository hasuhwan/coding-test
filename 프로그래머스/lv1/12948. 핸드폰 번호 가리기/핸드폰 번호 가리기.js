function solution(phone_number) {
  var answer = "";
  const stars = new Array(phone_number.length - 4);
  stars.fill("*");
  answer = stars.join("") + phone_number.slice(-4);
  return answer;
}