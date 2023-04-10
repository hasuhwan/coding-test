function solution(players, callings) {
  
    const nameObj={};
    const rankObj={};
    for(let i=0; i<players.length; i++){
        nameObj[players[i]]=i;
        rankObj[i]=players[i];
    }
    for(let i=0; i<callings.length; i++){
        const tempRank=nameObj[callings[i]]--;
        const changeName=rankObj[tempRank-1];
        rankObj[tempRank]=changeName;
        rankObj[tempRank-1]=callings[i];
        nameObj[changeName]++;
    }
   
    return Object.values(rankObj);
}