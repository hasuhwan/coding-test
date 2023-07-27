function solution(phone_book) {
    const obj={};
    phone_book.forEach(el=>{
        obj[el]=1;
    });
    for(let i=0; i<phone_book.length; i++){
        const temp=phone_book[i];
        let str="";
        for(let j=0; j<temp.length; j++){
            str+=temp[j];
            if(obj[str]&&str!==temp){
                return false;
            }
        }
    }
    return true;
}