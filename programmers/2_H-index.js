function solution(citations) {
  var answer = -1;
  // First we order the values from the largest to the lowest value
  let arr = citations.slice().sort((a, b) => b - a);
  if (arr[0] === 0) return 0;
  // Then, we look for the last position in which value is greater than or equal to the position (we call h this position)
  for (let i = arr.length; i > -1; i--) {
    if (i <= arr[i]) {
      answer = i;
      break;
    }
  }

  return answer + 1;
}
