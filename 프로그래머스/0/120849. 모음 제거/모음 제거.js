function solution(my_string) {
    const regexp=new RegExp(/[aeiou]/,"g");
    return my_string.replace(regexp,"");
}