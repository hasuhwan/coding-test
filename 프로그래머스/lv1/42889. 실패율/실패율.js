function solution(N, stages) {
  var answer = [];
  const arr = new Array(N).fill(0);

  for (let i = 1; i <= N + 1; i++) {
    if (i === N + 1) {
      continue;
    }
    arr[i - 1] = [i, stages.filter((num) => num === i).length / stages.length];
    stages = stages.filter((num) => num !== i);
  }
  const sort = arr.sort((a, b) => b[1] - a[1]);
  answer = sort.map((ele) => ele[0]);


  return answer;
}