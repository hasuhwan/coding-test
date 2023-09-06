//초 단위 배열로 만들어야 함.
//누적 합으로 가야함?

function solution(play_time, adv_time, logs) {
    let answer = 0;
    function toSecond(str){
        const [h,m,s]=str.split(":").map(el=>Number(el));
        return h*3600+m*60+s;
    }
    const play_time_second=toSecond(play_time);
    const adv_time_second=toSecond(adv_time);
    const timeArr=new Array(play_time_second).fill(0);
    logs.forEach(el=>{
        const [start,end]=el.split("-").map(el=>toSecond(el));
        timeArr[start]++;
        timeArr[end]--;
    });
    for(let i=1; i<timeArr.length; i++){
        timeArr[i]+=timeArr[i-1];
    }
    let person=0;
    for(let i=0; i<adv_time_second; i++){
        person+=timeArr[i];
    }
    let max=person;
    for(let i=adv_time_second; i<timeArr.length; i++){
        person=person+timeArr[i]-timeArr[i-adv_time_second];
        if(person>max){
            max=person;
            answer=i-adv_time_second+1;
        }
    }
    const h=String(parseInt(answer/3600)).padStart(2,"0");
    const m=String(parseInt(answer%3600/60)).padStart(2,"0");
    const s=String(parseInt(answer%60)).padStart(2,"0");
    return [h,m,s].join(":");
}