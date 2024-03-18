function solution(s) {
    const map=new Map();
    s.match(/\d{1,}/g).forEach(el=>{
        const number=Number(el);
        map.set(number,(map.get(number)||0)+1);
    });
    return [...map.entries()].sort((a,b)=>b[1]-a[1]).map(([key,value])=>key);
}