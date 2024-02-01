function solution(my_string) {
    const set=new Set();
    for(let char of my_string){
        if(!set.has(char)){
            set.add(char);
        }
    }
    return [...set].join("");
}