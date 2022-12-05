function solution(m, musicinfos) {
  var answer = [];
  let str = "";
  const splitFuc = (str,time=1439) => {
    const newStr = str.split("#");

    return newStr
      .map((el, i) => {
        if (i !== newStr.length - 1) {
          return el.slice(0, el.length - 1) + el.slice(-1).toLowerCase();
        }
        return el;
      })
      .join("").slice(0,time);
  };
  if (m.includes("#")) {
    str = splitFuc(m);
  } else {
    str = m;
  }

  const musicinfosArr = musicinfos.forEach((el) => {
    const arr = el.split(",");
    let start = arr[0].split(":");
    start = Number(start[0]) * 60 + Number(start[1]);
    let end = arr[1].split(":");
    end = Number(end[0]) * 60 + Number(end[1]);
      
    if (arr[3].includes("#")) {
      const temp = splitFuc(arr[3],end-start);
      arr[3] = temp.repeat(Math.ceil(str.length / temp.length) + 1);
    } else {
      arr[3] = arr[3].repeat(Math.ceil(str.length / arr[3].length) + 1);
    }
if(arr[3].includes(str)){
    answer.push([end-start,arr[2]]);
}
  });

  
  answer.sort((a, b) => Number(b[0]) - Number(a[0]));
  return answer.length !== 0 ? answer[0][1] : "(None)";
}