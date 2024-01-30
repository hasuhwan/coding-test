function solution(n_str) {
    let idx=0;
    while(idx<n_str.length){
        if(n_str[idx]==="0"){
            idx++;
        }else{
            return n_str.slice(idx);
        }
    }
}