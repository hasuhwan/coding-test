function solution(msg) {
    var answer = [];
    const arr=new Array(27).fill("");
    for(let i=1; i<arr.length; i++){
        arr[i]=String.fromCharCode(i+64);
    }
    for(let i=0; i<msg.length; i++){
        let currIdx=i;
        let prevStr="";
        let nextStr=msg[currIdx];
        while(arr.includes(nextStr)&&currIdx<msg.length){
            prevStr=nextStr;
            nextStr+=msg[++currIdx];
        }
        arr.push(nextStr);
        answer.push(arr.indexOf(prevStr));
        i=currIdx-1;
    }
    return answer;
}