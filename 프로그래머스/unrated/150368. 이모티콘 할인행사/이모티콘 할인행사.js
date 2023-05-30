function solution(users, emoticons) {
    var answer = [0,0];
    const dis=[0.9,0.8,0.7,0.6];
    const order=[];
function dfs(tempArr,idx){
    if(tempArr.length===emoticons.length){
        order.push([...tempArr]);
        return;
    }
    for(let i=0; i<dis.length; i++){
        tempArr.push([emoticons[idx]*dis[i],100-dis[i]*100]);
        dfs(tempArr,idx+1);
        tempArr.pop();
    }
}
dfs([],0);
    order.forEach(el=>{
        let tempCount=0;
        let tempPlus=0;
        users.forEach(([tempDis,temp])=>{
            const total=el.reduce((acc,cur)=>{
                if(tempDis<=cur[1]){
                    return acc+cur[0];
                }else{
                    return acc;
                }
            },0);
            if(total>=temp){
                tempPlus++;
            }else{
                tempCount+=total;
            }
        })
        if(answer[0]<tempPlus){
            answer=[tempPlus,tempCount];
        }else if(answer[0]===tempPlus&&answer[1]<tempCount){
            answer=[tempPlus,tempCount];
        }
    })
    return answer;
}