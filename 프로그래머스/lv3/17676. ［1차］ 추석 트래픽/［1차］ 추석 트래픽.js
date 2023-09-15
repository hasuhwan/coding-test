function solution(lines) {
    const timeCount=[];
    let answer=0;
    const convertMs=lines.forEach((str)=>{
        const split=str.split(" ");
        const endTime=split[1].split(":").reduce((acc,cur,idx)=>{
           if(idx===0){
               return acc+Number(cur)*3600*1000;
           }else if(idx===1){
               return acc+Number(cur)*60*1000;
           }else{
               const s=Number(cur.replace(".",""));
               return acc+s;
           }
        },0);
        const duringTime=Number(split[2].replace(".","").replace("s","").padEnd(4,"0"));
        if(duringTime>3000){
            return;
        }
        const startTime=endTime-duringTime+1;
        timeCount.push([0,startTime<0?0:startTime]);
        timeCount.push([1,endTime+999]);
    });
    let count=0;
    timeCount.sort((a,b)=>{
        if(a[1]===b[1]){
            return a[0]-b[0];
        }else{
            return a[1]-b[1];
        }
    }).forEach((el)=>{
        if(el[0]===0){
            count++;
        }else{
            count--;
        }
        answer=Math.max(answer,count);
    })
    return answer;
}