function solution(n) {
    const arr=new Array(n+1).fill(false);
    function checkFunc(num){
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i===0){
                return true;
            }
        }
        return false;
    }
    for(let i=1; i<arr.length; i++){
        if(arr[i]===true){
            continue;
        }
        if(checkFunc(i)){
            let temp=i;
            while(temp<arr.length){
                arr[temp]=true;
                temp+=i;
            }
        }
    }
    return arr.reduce((acc,cur)=>{
        if(cur){
            return acc+1;
        }
        return acc;
    },0);
}