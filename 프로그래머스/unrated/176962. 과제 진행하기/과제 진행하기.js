function solution(plans) {
  var answer = [];
  plans.forEach((el) => {
    const [hour, minute] = el[1].split(":").map((el) => Number(el));
    el[2] = Number(el[2]);
    el[1] = hour * 60 + minute;
  });
  plans.sort((a, b) => a[1] - b[1]);
  const ing = [];

  while (plans.length !== 0) {
    const [name, start, playtime] = plans.shift();
    if (plans[0] === undefined) {
      answer.push(name);
        break;
    }
    const [nextName, nextStart, nextPlaytime] = plans[0];

    if (start + playtime <= nextStart) {
      answer.push(name);

      let time = nextStart - (start + playtime);

      while (time !== 0) {
        if (ing.length === 0) {
          break;
        }
        const [ingName, ingTime] = ing.pop();
        if (time >= ingTime) {
          time -= ingTime;
            answer.push(ingName);
        } else {
          ing.push([ingName, ingTime - time]);
          break;
        }
      }
    } else {
      ing.push([name, start + playtime - nextStart]);
    }
  }
  return answer.concat(ing.reverse().map((el) => el[0]));
}