function solution(box, n) {
    function floor(num){
        return Math.floor(num/n);
    }
    return floor(box[0])*floor(box[1])*floor(box[2]);
}