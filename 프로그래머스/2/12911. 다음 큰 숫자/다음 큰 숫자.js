function solution(n) {
    const str=n.toString(2);
    let tail="";
    for(let i=str.length-1; i>0; i--){
        if(str[i]==="1"&&str[i-1]==="0"){
            return parseInt(str.slice(0,i-1)+"10"+tail,2);
        }else if(str[i]==="1"){
            tail+="1";
        }else{
            tail="0"+tail;
        }
    }
    return parseInt("10"+tail,2);
}

