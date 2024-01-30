function solution(my_string, index_list) {
    var answer = '';
    index_list.forEach(idx=>{
        answer+=my_string[idx];
    })
    return answer;
}