function solution(k, room_number) {
    var answer = [];
    const visited=new Map();
room_number.forEach(num=>{

    if(visited.has(num)===false){
        visited.set(num,num+1);
        answer.push(num);
    }else{
        const list=[];
        let temp=num;
        while(visited.has(temp)===true){
            list.push(temp);
            temp=visited.get(temp);
        }
        answer.push(temp);
        list.concat([temp]).forEach(el=>{
            visited.set(el,temp+1);
        });
    }
})
    return answer;
}