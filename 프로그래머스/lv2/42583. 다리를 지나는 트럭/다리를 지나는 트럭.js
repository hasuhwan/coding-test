function solution(bridge_length, weight, truck_weights) {
  var answer = 1;
  const visited = [];
  let going = [];
  const length = truck_weights.length;
  while (visited.length !== length) {
    answer++;
    going.push({ weight: truck_weights[0], count: 0 });
    going.forEach((ele) => (ele.count = ele.count + 1));
    if (going.reduce((acc, cur) => acc + cur.weight, 0) <= weight) {
      truck_weights = truck_weights.slice(1);
    } else {
      going.pop();
    }
    if (going[0].count === bridge_length) {
      visited.push(0);
      going.shift();
    }
  }
  return answer;
}