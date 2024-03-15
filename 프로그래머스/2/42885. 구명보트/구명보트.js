function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>b-a);
    let left=0;
    let right=people.length-1;
    while(left<=right){
        const lp=people[left];
        const rp=people[right];
        if(lp+rp>limit){
            answer++;
            left++;
        }else{
            left++;
            right--;
            answer++;
        }
    }
    return answer;
}