function solution(citations) {
  // 인용횟수 내림차순으로 정렬
  let arr = citations.slice().sort((a, b) => b - a);

  // we look for the last position in which value is greater than or equal to the position (we call h this position)
  // 인용횟수 : [6,5,3,1,0]
  // 인덱스       1,2,3,4,5  == 각 인용횟수 이상 인용된 논문의 개수
  for (let h = arr.length; h > 0; h--) {
    let value = arr[h - 1];
    if (value >= h) {
      return h;
    }
  }
  // [0,0,0]의 경우
  return 0;
}
