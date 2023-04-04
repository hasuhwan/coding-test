function solution(s) {
    var answer = s.length;
    for(let i=1; i<=Math.floor(s.length/2); i++){
      let temp="";
        let count=1;
        for(let j=0; j<s.length; j+=i){
            const str=s.slice(j,j+i);
            while(true){
                j+=i;
               const nextStr=s.slice(j,j+i);
                if(str===nextStr){
                    count++;
                }else{
                    break;
                }
            }
            temp+=count>=2?count+str:str;
            j-=i;
            count=1;
        }
        answer=answer>temp.length?temp.length:answer;
    }
    return answer;
}