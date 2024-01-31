function solution(my_string) {
    return my_string.split("").map(el=>el.toLowerCase()).sort((a,b)=>a>b?1:-1).join("");
}