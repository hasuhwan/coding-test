function solution(bandage, health, attacks) {
    let tempHealth=health;
    let prev=attacks[0][0];
    tempHealth-=attacks[0][1];
    if(tempHealth<=0){
        return -1;
    }
    const [doing,add,ex]=bandage;
    for(let i=1; i<attacks.length; i++){
        const [time,damage]=attacks[i];
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