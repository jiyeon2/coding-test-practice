// 입력된 numbers를 배열로 만들어서
// 배열 맨 앞에서부터 바로 옆 수와 비교해서 작은 수를 지우는 방식으로 문제를 풀려고 했다.
// 테스트 1,11 제외하고 모두 오답처리되었다.
// 문제접근 방법이 틀린듯하나 뭐가 문제인지 모르겠다..

function solution(number, k) {
  var answer = "";
  let i = 0;
  let j = 1;
  let arr = number.split("");

  while (j < arr.length && k > 0) {
    if (arr[i] > arr[j]) {
      arr[j] = "";
      j = j + 1;
      k -= 1;
    } else if (arr[i] < arr[j]) {
      arr[i] = "";
      let temp = j;
      i = j;
      j = temp + 1;
      k -= 1;
    } else {
      i = j + 1;
      j = i + 1;
    }
    // console.log({arr});
  }
  answer = arr.join("");
  return answer;
}
