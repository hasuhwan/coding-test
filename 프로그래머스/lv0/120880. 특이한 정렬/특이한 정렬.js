function solution(numlist, n) {
    numlist.sort((a,b)=>{
        const absA=Math.abs(a-n);
        const absB=Math.abs(b-n);
        if(absA>absB){
            return 1;
        }else if(absA<absB){
            return -1;
        }else{
            if(b>a){
                return 1;
            }else{
                return -1;
            }
        }
    })
    
    return numlist;
}