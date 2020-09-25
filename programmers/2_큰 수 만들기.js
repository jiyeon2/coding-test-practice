// https://programmers.co.kr/questions/11211 질문목록에 있는 글 참고하여 다시 풀어봤다
// number이 7자리 숫자(1231232)고, k가 3인 경우, 3개의 숫자를 삭제하고 '4자리의 수'를 만들어야한다
// 3___ = numbers[0:4] 중 가장 큰 수 1개(3) + 나머지수 3개
// 32__ = numbers[3:5] 중 가장 큰 수 1개(2) + 나머지수 2개
// ... 이런식으로 했는데 테스트케이스 10번이 런타임에러가 난다
function solution(number, k) {
  var answer = "";
  let arr = number.split("");
  let len = arr.length;
  let start = 0;
  let end = len - 1 - (len - k - 1) + 1;
  while (end <= len) {
    let slicedArr = arr.slice(start, end);
    let maxVal = Math.max(...slicedArr).toString();
    let indexOfMaxVal = slicedArr.indexOf(maxVal) + start;
    // console.log({slicedArr,maxVal, indexOfMaxVal})
    answer += maxVal;
    start = indexOfMaxVal + 1;
    end += 1;
    // console.log({answer, start, end});
  }
  return answer;
}

// 입력된 numbers를 배열로 만들어서
// 배열 맨 앞에서부터 바로 옆 수와 비교해서 작은 수를 지우는 방식으로 문제를 풀려고 했다.
// 테스트 1,11 제외하고 모두 오답처리되었다.
// 문제접근 방법이 틀린듯하나 뭐가 문제인지 모르겠다..

// function solution(number, k) {
//   var answer = "";
//   let i = 0;
//   let j = 1;
//   let arr = number.split("");

//   while (j < arr.length && k > 0) {
//     if (arr[i] > arr[j]) {
//       arr[j] = "";
//       j = j + 1;
//       k -= 1;
//     } else if (arr[i] < arr[j]) {
//       arr[i] = "";
//       let temp = j;
//       i = j;
//       j = temp + 1;
//       k -= 1;
//     } else {
//       i = j + 1;
//       j = i + 1;
//     }
//     // console.log({arr});
//   }
//   answer = arr.join("");
//   return answer;
// }
