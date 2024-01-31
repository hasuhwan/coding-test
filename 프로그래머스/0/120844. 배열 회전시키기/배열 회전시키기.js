function solution(numbers, direction) {
    if(direction==="right"){
        return numbers.slice(-1).concat(numbers.slice(0,numbers.length-1));
    }
    return numbers.slice(1).concat(numbers.slice(0,1));
}