  function solution(price, money, count) {
    var answer = 0;
    let total = 0;
    for (let i = 1; i <= count; i++) {
      total += price * i;
    }
    answer = money - total;
    if (money >= total) {
      return 0;
    } else {
      return -answer;
    }
  }
