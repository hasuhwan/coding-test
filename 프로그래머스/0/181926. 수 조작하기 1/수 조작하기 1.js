function solution(n, control) {
    const obj={
        "w":1,
        "s":-1,
        "d":10,
        "a":-10,
    };
    for(let str of control){
        n+=obj[str];
    }
    return n;
}