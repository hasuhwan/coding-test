function solution(priorities, location) {
    const taskOrder=[];
    priorities=priorities.map((el,idx)=>{
        return [el,idx];
    });
    while(priorities.length!==0){
        const [p,i]=priorities.shift();
        let bool=false;
        bool=priorities.some(el=>el[0]>p);
        if(bool){
            priorities.push([p,i]);
        }else{
            taskOrder.push(i);
        }
    }
    return taskOrder.indexOf(location)+1;
}