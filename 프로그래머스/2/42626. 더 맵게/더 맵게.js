class Pq {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    const heap = this.heap;
    heap.push(value);
    this.bubbleUp(heap);
  }
  bubbleUp(heap) {
    let index = heap.length - 1;
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && heap[index] < heap[parent]) {
      [heap[index], heap[parent]] = [heap[parent], heap[index]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }
  bulbbleDown(heap) {
    let index = 0;

    while (index < heap.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;
      if (heap[next] > heap[left]) {
        next = left;
      }
      if (heap[right] < heap[next]) {
        next = right;
      }
      if (next === index) {
        break;
      }
      [heap[next], heap[index]] = [heap[index], heap[next]];
      index = next;
    }
  }
  pop() {
    const heap = this.heap;
    const result = heap[0];
		if(heap.length===1){
		return heap.pop();
		}
		if(heap.length===0){
		return undefined;
		}
    heap[0] = heap.pop();
    this.bulbbleDown(heap);
    return result;
  }

}

function solution(scoville, K) {
    var answer = 0;
    const heap=new Pq();
    scoville.forEach((el)=>{
        heap.insert(el);
    });
let temp=heap.pop();
    while(temp<K){
        if(heap.heap.length===0){
            return -1;
        }
        const push=temp+(heap.pop()*2);
        heap.insert(push);
        answer++;
        temp=heap.pop();
    }
    return answer;
}