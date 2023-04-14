function solution(numbers) {
    var answer = [];
const newNumbers=numbers.map(el=>el.toString(2));
newNumbers.forEach((el,idx)=>{
    if(numbers[idx]%2===0){
        answer.push(numbers[idx]+1)
        return;
    }else{
        for(let i=el.length-1; i>=0; i--){
            if(el[i]==="0"){
                answer.push(parseInt(el.slice(0,i)+10+el.slice(i+2),2));
                return;
            }else if(i===0){
                answer.push(parseInt(10+el.slice(i+1),2));
                return;
            }
        }
    }
})
    return answer;
}