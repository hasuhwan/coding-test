class Heap {
  constructor() {
    this.heap = [];
  }

  insert(arr) {
    const heap = this.heap;
    arr.forEach((el) => {
      heap.push(el);
      let index = heap.length - 1;
      let parent = Math.floor((index - 1) / 2);
      while (index > 0) {
        if (heap[index].cost < heap[parent].cost) {
          [heap[index], heap[parent]] = [heap[parent], heap[index]];
        }
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    });
  }

  pop() {
    const heap = this.heap;
    const result = heap[0];
    if (heap.length === 0) {
      return;
    }
    if (heap.length === 1) {
      heap.pop();
      return result;
    }
    heap[0] = heap.pop();

    let index = 0;
    while (index < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (heap[next].cost > heap[right]?.cost) {
        next = right;
      }
      if (heap[next].cost > heap[left]?.cost) {
        next = left;
      }
      if (next === index) {
        break;
      }
      [heap[index], heap[next]] = [heap[next], heap[index]];
      index = next;
    }
    return result;
  }
}

function solution(n, costs) {
  var answer = 0;
  const visited = new Array(n).fill(false);
  const arr = new Array(n).fill(0).map(() => []);
  costs.forEach(([from, to, cost]) => {
    arr[from].push({ to, cost });
    arr[to].push({ to: from, cost });
  });

  const heap = new Heap();
  heap.insert(arr[0]);

  visited[0] = true;
  while (heap.heap.length !== 0) {
    const temp = heap.pop();
    if (visited[temp.to] === true) {
      continue;
    }
    heap.insert(arr[temp.to]);
    visited[temp.to] = true;
    answer += temp.cost;
  }
  return answer;
}