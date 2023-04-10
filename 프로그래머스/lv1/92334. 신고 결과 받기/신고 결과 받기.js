function solution(id_list, report, k) {
    var answer = [];
    const idObj={};
    const reportObj={};
    for(let i=0; i<report.length; i++){
        const [author,people]=report[i].split(" ");
     
        if(idObj[author]){
            if(idObj[author].includes(people)){
            continue;
        }
            idObj[author].push(people);
        }else{
            idObj[author]=[people];
        }
        reportObj[people]=reportObj[people]?reportObj[people]+1:1;
    }
    for(let i=0; i<id_list.length; i++){
    if(idObj[id_list[i]]){
            const temp=idObj[id_list[i]].reduce((acc,cur)=>{
                if(reportObj[cur]>=k){
                    return acc+1;
                }else{
                    return acc;
                }
            },0)
            answer.push(temp);
        }else{
            answer.push(0);
        }
    }
    return answer;
}