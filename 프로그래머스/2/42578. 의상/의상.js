function solution(clothes) {
    const map=new Map();
    clothes.forEach(([item,category])=>{
        map.set(category,(map.get(category)||0)+1);
    });
    let answer=1;
    for(let value of map.values()){
        answer*=(value+1);
    }
    return answer-1;
}