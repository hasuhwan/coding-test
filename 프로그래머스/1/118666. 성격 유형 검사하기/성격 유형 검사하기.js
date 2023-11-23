function solution(survey, choices) {
    var answer = '';
    const obj={};
    const types=["RT","CF","JM","AN"];
    types.forEach(type=>{
        type.split("").forEach(char=>{
            obj[char]=0;
        })
    });
    survey.forEach((type,idx)=>{
        const [dis,agree]=type;
        const val=choices[idx];
        obj[val>4?agree:dis]+=Math.abs(val-4);
    });

    
    return types.map(type=>{
        const [one,two]=type.split("");
        return obj[one]<obj[two]?two:one;
    }).join("");
}