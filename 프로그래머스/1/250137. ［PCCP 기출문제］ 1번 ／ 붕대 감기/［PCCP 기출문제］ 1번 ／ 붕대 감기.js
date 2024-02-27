function solution(bandage, health, attacks) {
    let tempHealth=health;
    let prev=0;
   
    const [doing,add,ex]=bandage;
    for(let [time,damage] of attacks ){
        const diff=time-prev-1;
        const extraAdd=Math.floor(diff/doing);
        tempHealth=Math.min(tempHealth+(add*diff)+(extraAdd*ex),health)-damage;
        prev=time;
        if(tempHealth<=0){
            return -1;
        }
    }
    return tempHealth;
}