function solution(s) {
    return s.split(" ").reduce((acc,cur)=>{
        const temp=Number(cur);
        const max=Math.max(temp,acc[1]);
        const min=Math.min(temp,acc[0]);
        return [min,max];
    },[Infinity,-Infinity]).join(" ");
}