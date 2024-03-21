function solution(numbers) {
    const answer = numbers.map(num => num.toString())
                          .sort((a, b) => (b + a) - (a + b))
                          .join('');

    // 모든 요소가 0인 경우 '0'을 반환해야 합니다.
    return answer[0] === '0' ? '0' : answer;
}