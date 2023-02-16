function solution(cards1, cards2, goal) {
  let pointerOne = 0;
  let pointerTwo = 0;
  for (let i = 0; i < goal.length; i++) {
    if (cards1[pointerOne] === goal[i]) {
      pointerOne++;
    } else if (cards2[pointerTwo] === goal[i]) {
      pointerTwo++;
    } else {
      return "No";
    }
  }
  return "Yes";
}