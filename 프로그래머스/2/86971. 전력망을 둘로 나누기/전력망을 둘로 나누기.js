function solution(n, wires) {
    var answer = Infinity;
    const map=new Map();
    wires.forEach(([one,two])=>{
        if(!map.has(one)){
            map.set(one,new Set());
        }
        if(!map.has(two)){
            map.set(two,new Set());
        }
        map.get(one).add(two);
        map.get(two).add(one);
    });
    
    wires.forEach(([one,two])=>{
        map.get(one).delete(two);
        map.get(two).delete(one);
        const visited=new Set();
        let count=1;
        function dfs(node){
        const link=map.get(node);
            for(let nextNode of link){
                if(!visited.has(nextNode)){
                    visited.add(nextNode);
                    count++;
                    dfs(nextNode);
                }
            }
    }
        visited.add(1);
        dfs(1);
        map.get(one).add(two);
        map.get(two).add(one);
        const extra=n-count;
        answer=Math.min(answer,Math.abs(count-extra));
    })
    return answer;
}