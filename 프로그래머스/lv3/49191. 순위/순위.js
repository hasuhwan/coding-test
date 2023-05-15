function solution(n, results) {
    let answer = 0;
    const graph = new Array(n+1);
    for(let i=0; i<graph.length; i++){
        graph[i] = new Array(n+1).fill(false);
    }
    results.forEach((v)=>{
        const [A,B] = v;
        graph[A][B] = 1;
        graph[B][A] = -1;
        graph[A][A] = 0;
        graph[B][B] = 0;
    });
    
    for(let pass=0; pass<n+1; pass++){
        for(let start=0; start<n+1; start++){
            for(let near=0; near<n+1; near++){
                // 이기는 경우
                if(graph[start][pass] === 1 && graph[pass][near] === 1) graph[start][near] = 1;
                // 지는 경우
                if(graph[start][pass] === -1 && graph[pass][near] === -1) graph[start][near] = -1;
            }
        }
    }
    
    graph.forEach((line)=>{
        if(line.filter((v)=> v === false).length === 1){
            answer++;
        }
    })
    return answer;
}