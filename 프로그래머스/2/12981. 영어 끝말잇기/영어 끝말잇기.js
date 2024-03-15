function solution(n, words) {
    let count=1;
    let lastChar=words[0][words[0].length-1];
    const visited=new Set([words[0]]);
    for(let i=1; i<words.length; i++){

        if(words[i][0]!==lastChar||visited.has(words[i])){
            return [count%n+1,Math.floor(count/n)+1];
        }else{
            visited.add(words[i]);
            lastChar=words[i][words[i].length-1];
            count++;
        }
    }
    return [0,0];
    
}