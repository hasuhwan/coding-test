function solution(my_string) {

    return my_string.trim().replace(/ {1,}/g,"/").split("/");
}