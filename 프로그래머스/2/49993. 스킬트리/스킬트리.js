function solution(skill, skill_trees) {
    var answer = 0;
    const map=new Map();
    for(let i=0; i<skill.length; i++){
        map.set(skill[i],i);
    }
    skill_trees.forEach(str=>{
        const newMap=new Map(map);
        let val=0;
        for(let i=0; i<str.length; i++){
            if(newMap.has(str[i])){
                if(newMap.get(str[i])>val){
                    return;
                }else{
                    val++;
                }
            }
        }
        answer++;
    })
    return answer;
}