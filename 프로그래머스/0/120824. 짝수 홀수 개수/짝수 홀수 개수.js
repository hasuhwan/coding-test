function solution(num_list) {
    var answer = new Array(2).fill(0);
    num_list.forEach(num=>{
        if(num%2===0){
            answer[0]++;
        }else{
            answer[1]++;
        }
    })
    return answer;
}