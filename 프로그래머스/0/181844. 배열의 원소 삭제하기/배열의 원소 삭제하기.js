function solution(arr, delete_list) {
    const set=new Set(arr);
    delete_list.forEach(num=>{
        set.delete(num);
    });
    return [...set];
}