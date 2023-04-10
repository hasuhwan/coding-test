function solution(n, k) {
    var answer = 0;
    const nk=n.toString(k);
    let str="";
    function primeFunc(num){
        let bool=true;
        if(num===1){
            return false;
        }else if(num===2||num===3){
            return true;
        }
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }
for(let i=0; i<nk.length; i++){
    if(nk[i]==="0"){
        continue;
    }
    str+=nk[i];
    if(nk[i+1]!=="0"&&nk[i+1]!==undefined){
        continue;
    }

    if(primeFunc(Number(str))){
        answer++;
    }
    str="";
}
    return answer;
}