function solution(name, yearning, photo) {
    var answer = [];
    const obj={};
    for(let i=0; i<name.length; i++){
        obj[name[i]]=yearning[i];
    }
    const changeScore=photo.forEach(el=>{
        const temp=el.reduce((acc,cur)=>{
            if(obj[cur]===undefined){
                return acc;
            }else{
                return acc+obj[cur]
            }
        },0);
        answer.push(temp);
    })
    return answer;
}