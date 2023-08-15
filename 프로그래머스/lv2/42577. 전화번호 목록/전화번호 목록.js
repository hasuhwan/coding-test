function solution(phone_book) {
    const obj={};
    phone_book.sort((a,b)=>b.length-a.length);
    for(let i=0; i<phone_book.length; i++){
        let idx=0;
        let temp=obj;
        let bool=true;
        while(idx<phone_book[i].length){
            if(temp[phone_book[i][idx]]===undefined){
                bool=false;
                temp[phone_book[i][idx]]={};
            }
            temp=temp[phone_book[i][idx]];
            idx++;
        }
        if(bool){
            return false;
        }
    }
    
    return true;
}