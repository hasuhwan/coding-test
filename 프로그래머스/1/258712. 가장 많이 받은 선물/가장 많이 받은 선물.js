//친구 별 선물 주고 받은 수
// 토탈 받은 수 준 수
//선물 지수

function solution(friends, gifts) {
    const map=new Map();
    const nextMap=new Map();
    friends.forEach(people=>{
        map.set(people,{count:0,giveMap:new Map()});
        friends.forEach(friend=>{
            map.get(people).giveMap.set(friend,0);
        })
        nextMap.set(people,0);
    });
    gifts.forEach(str=>{
        const [sender,receiver]=str.split(" ");
        map.get(sender).count++;
        map.get(receiver).count--;
        map.get(sender).giveMap.set(receiver,(map.get(sender).giveMap.get(receiver))+1);
    });
    for(let [people,val] of map.entries()){
        for(let [key,give] of val.giveMap.entries()){
            if(give>map.get(key).giveMap.get(people)){
                nextMap.set(people,nextMap.get(people)+1);
            }else if(give===map.get(key).giveMap.get(people)&&val.count>map.get(key).count){
                nextMap.set(people,nextMap.get(people)+1);
            }
        }
    }
    return [...nextMap.values()].sort((a,b)=>b-a)[0];
}