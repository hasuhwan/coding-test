function solution(game_board, table) {
  var answer = 0;
table=table.map(el=>{
    return el.map(v=>v===1?0:1);
})
  const N = game_board.length;
  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  function back(arr, idxY, idxX, parentArr, boardArr) {
    const [Y, X] = arr[arr.length - 1];
    for (let i = 0; i < direction.length; i++) {
      const [stepY, stepX] = direction[i];
      const [nextY, nextX] = [stepY + idxY, stepX + idxX];
      if (
        nextY >= 0 &&
        nextY < N &&
        nextX >= 0 &&
        nextX < N &&
        parentArr[nextY][nextX] === 0
      ) {
        parentArr[nextY][nextX] = 1;
        arr.push([stepY + Y, stepX + X]);
        back(arr, nextY, nextX, parentArr, boardArr);
      }
    }
    if (JSON.stringify(boardArr[boardArr.length - 1]) !== JSON.stringify(arr)) {
      boardArr.push(arr);
    }
  }
  let boardArr = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (game_board[i][j] === 0) {
        game_board[i][j] = 1;
        back([[0, 0]], i, j, game_board, boardArr);
        let temp = [...boardArr[boardArr.length - 1]];
        temp.sort((a, b) => a[1] - b[1]);
        if (temp[0][1] < 0) {
          temp = temp.map((el) => {
            return [el[0], el[1] - temp[0][1]];
          });
        }
        let maxC = 0;
        let maxR = 0;
        temp.forEach((el) => {
          const [row, col] = el;
          maxR = maxR < row ? row : maxR;
          maxC = maxC < col ? col : maxC;
        });
        boardArr[boardArr.length - 1] = new Array(maxR + 1)
          .fill(0)
          .map(() => new Array(maxC + 1).fill(0));
        temp.forEach((el) => {
          const [row, col] = el;
          boardArr[boardArr.length - 1][row][col] = 1;
        });
      }
    }
  }
let tableArr=[];
     for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (table[i][j] === 0) {
        table[i][j] = 1;
        back([[0, 0]], i, j, table, tableArr);
        let temp = [...tableArr[tableArr.length - 1]];
        temp.sort((a, b) => a[1] - b[1]);
        if (temp[0][1] < 0) {
          temp = temp.map((el) => {
            return [el[0], el[1] - temp[0][1]];
          });
        }
        let maxC = 0;
        let maxR = 0;
        temp.forEach((el) => {
          const [row, col] = el;
          maxR = maxR < row ? row : maxR;
          maxC = maxC < col ? col : maxC;
        });
        tableArr[tableArr.length - 1] = new Array(maxR + 1)
          .fill(0)
          .map(() => new Array(maxC + 1).fill(0));
        temp.forEach((el) => {
          const [row, col] = el;
          tableArr[tableArr.length - 1][row][col] = 1;
        });
      }
    }
  }
    function rotateFunc(arr){
        const rotatedArr=new Array(arr[0].length).fill(0).map(()=>new Array(arr.length).fill(0));
        
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<arr[0].length; j++){
                rotatedArr[j][arr.length-1-i]=arr[i][j];
            }
        }
        return rotatedArr;
    }
    for(let i=0; i<boardArr.length; i++){
        const temp=JSON.stringify(boardArr[i]);
let index=-1;
        const bool=tableArr.some((el,idx)=>{
            if(JSON.stringify(el)===temp){
                index=idx;
                return true;
            }else{
                let time=0;
                let rotate=[...el];
                while(time<=3){
                    rotate=rotateFunc(rotate);
                    if(JSON.stringify(rotate)===temp){
                        index=idx;
                        return true;
                    }
                    time++;
                }
                return false;
            }
        })
        if(bool===true){
            const tempAnswer=tableArr[index].flat().reduce((acc,cur)=>{
                return cur===1?acc+1:acc;
            })
            answer+=tempAnswer;
            tableArr.splice(index,1);
        }
        
    }
  return answer;
}