function solution(num_list) {
    const len=num_list.length;
    let pushNum=0;
    if(num_list[len-1]>num_list[len-2]){
        pushNum=num_list[len-1]-num_list[len-2];
    }else{
        pushNum=num_list[len-1]*2;
    }
    return num_list.concat(pushNum);
}