function solution(my_string, alp) {
    const regexp=new RegExp(`[${alp}]`,"g");
    const upper=alp.toUpperCase();
    return my_string.replace(regexp,upper);
}