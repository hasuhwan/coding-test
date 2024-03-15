function solution(s) {
    let zeroCount=0;
    let doingCount=0;
    while(s.length!==1){
        let nextS="";
        for(let char of s){
            if(char==="0"){
                zeroCount++;
            }else{
                nextS+=char;
            }
        }
        doingCount++;
        s=nextS.length.toString(2);
    }
    return [doingCount,zeroCount];
}