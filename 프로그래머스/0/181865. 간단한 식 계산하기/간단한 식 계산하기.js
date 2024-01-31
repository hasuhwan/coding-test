function solution(binomial) {
    let op;
    if(binomial.includes("+")){
        op="plus";
    }else if(binomial.includes("-")){
        op="minus";
    }else{
        op="mul";
    }
    const [one,two]=binomial.split(/ ?[\+\-\*] ?/).map((el)=>Number(el));
    if(op==="plus"){
        return one+two;
    }else if(op==="minus"){
        return one-two;
    }else{
        return one*two;
    }
}