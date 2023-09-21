function solution(babbling) {
    var answer = 0;
    const available=[];
    const arr=["aya", "ye", "woo", "ma"];
    const visited=new Array(4).fill(false);
    function backFunc(str){
        available.push(str);
        for(let i=0; i<arr.length; i++){
            if(!visited[i]){
                visited[i]=true;
                backFunc(str+arr[i]);
                visited[i]=false;
            }
        }
    }
    for(let i=0; i<arr.length; i++){
        visited[i]=true;
        backFunc(arr[i]);
        visited[i]=false;
    }
    babbling.forEach((str)=>{
        if(available.includes(str)){
            answer++;
        }
    })
    
    return answer;;
}