function solution(str1, str2) {
    var answer = 0;
    const regexp=new RegExp(/[a-z]{2}/)
    function makeArr(str){
        str=str.toLowerCase();
        const arr=[];
        let tempStr=str.slice(0,2);
        arr.push(tempStr);
        for(let i=2; i<str.length; i++){
            tempStr=tempStr[1]+str[i];
            arr.push(tempStr);
        }
        return arr.filter(char=>regexp.test(char));
    }
    const arr1=makeArr(str1);
    const arr2=makeArr(str2);
    if(arr1.length===0&&arr2.length===0){
        return 65536;
    }
    function makeMap(arr){
        const map=new Map();
        arr.forEach(str=>{
            map.set(str,(map.get(str)||0)+1);
        });
        return map;
    }
    const map1=makeMap(arr1);
    const map2=makeMap(arr2);
    const intersection=new Map();
    const union=new Map();
    function check(map1,map2){
        for(let [key,value] of map1.entries()){
            intersection.set(key,Math.min(value,map2.get(key)||0));
            union.set(key,Math.max(value,map2.get(key)||0));
        }
    }
    check(map1,map2);
    check(map2,map1);
    function addValue(map){
        let sum=0;
        for(let value of map.values()){
            sum+=value;
        }
        return sum;
    }
    const i=addValue(intersection);
    const u=addValue(union);
    return parseInt(i/u*65536);
}