class Data {
  constructor() {
    this.total = 0;
    this.heap = [];
  }
  insert(data) {
    this.heap.push(data);
      this.heap.sort((a,b)=>b[0]-a[0]);
  }
}

function solution(genres, plays) {
  var answer = [];
    const map=new Map();
    genres.forEach((genre,idx)=>{
        if(!map.has(genre)){
            map.set(genre,new Data());
        }
        const data=map.get(genre);
        data.total+=plays[idx];
        data.insert([plays[idx],idx]);
    });
    [...map.entries()].sort((a,b)=>b[1].total-a[1].total).forEach((data)=>{
        const [key,values]=data;
        answer.push(...values.heap.slice(0,2).map(el=>el[1]));
    })
  return answer;
}
