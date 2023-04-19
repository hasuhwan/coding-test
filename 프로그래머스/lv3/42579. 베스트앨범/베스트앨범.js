function solution(genres, plays) {
    var answer = [];
    const name={};
    const song={};
    for(let i=0; i<plays.length; i++){
        name[genres[i]]=(name[genres[i]]||0)+plays[i];
        song[genres[i]]=(song[genres[i]]||[]).concat([[plays[i],i]]);
    }
  const order=Object.entries(name).sort((a,b)=>b[1]-a[1]);
order.forEach(el=>{
    const temp=song[el[0]].sort((a,b)=>b[0]-a[0]).slice(0,2).map(el=>el[1]);
    answer=answer.concat(temp);
})
    return answer;
}