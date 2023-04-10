function solution(board, skill) {
    var answer = 0;
    const arr=new Array(board.length+1).fill(0).map(()=>new Array(board[0].length+1).fill(0));
    skill.forEach(el=>{
        let [type,r1,c1,r2,c2,degree]=el;
        if(type===1){
            degree=-degree;
        }
        arr[r1][c1]+=degree;
        arr[r1][c2+1]+=-degree;
        arr[r2+1][c1]+=-degree;
        arr[r2+1][c2+1]+=degree;
    });
for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr[0].length; j++){
        arr[i][j]+=arr[i][j-1];
    }
}
    for(let i=1; i<arr.length; i++){
    for(let j=0; j<arr[0].length; j++){
        arr[i][j]+=arr[i-1][j];
    }
}
board.forEach((el,i)=>{
    el.forEach((v,j)=>{
        if(v+arr[i][j]>0){
            answer++;
        }
    })
})
    return answer;
}