function solution(want, number, discount) {
    var answer = 0;
    const map=new Map();
    for(let i=0; i<discount.length; i++){
        if(i===0){
            for(let j=0; j<10; j++){
                const initialItem=discount[j];
                map.set(initialItem,(map.get(initialItem)||0)+1);
            }
        }else{
            const item=discount[i+9];
             map.set(item,(map.get(item)||0)+1);
            const deleteItem=discount[i-1];
            const number=map.get(deleteItem);
            if(number===1){
                map.delete(deleteItem);
            }else{
                map.set(deleteItem,number-1);
            } 
        }
        const bool=want.every((item,idx)=>{
            if(map.get(item)===number[idx]){
                return true;
            }else{
                false;
            }
        });
        if(bool){
            answer++;
        }
    }
    return answer;
}