function solution(nums) {
  var answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if(hi(sum)){
          answer++;
        }
      }
    }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}
function hi(sum){
for(let n=2; n<=Math.sqrt(sum); n++){
  if(sum % n ===0){
    return false;
  }
  
}
return true;
}