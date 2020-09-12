function solution(n) {
  // 인덱스 0부터 n까지 배열을 1로 채움
  let nums = Array(n + 1).fill(1);

  // 2부터 n의 제곱근까지 for 루프
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (nums[i] === 0) continue;
    // nums[i]가 1인 경우는 소수이다
    // nums[i]의 배수를 모두 0으로 바꾼다
    for (let j = i + i; j <= n; j += i) {
      nums[j] = 0;
    }
  }

  // 	[1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0] 에서 인덱스 0과 1은 제외
  return nums.slice(2).reduce((a, b) => a + b);
}
