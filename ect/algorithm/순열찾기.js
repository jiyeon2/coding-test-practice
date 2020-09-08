/*
a = [1,2,3] 의 순열 찾기

result = []
output = []
used = [False, ..]

i = 0부터 시작 a.length-1까지
used[0] = True
output.append(a[0])

j = i+1 부터 a.length-1까지
used[j] == False이면
output.append(a[j])
used[j] = True

... 반복하다가
output.length === a.length 면 result 에 포함
이전 상태(마지막 요소를 넣기 전)로 돌아가기 
    => 재귀함수를 사용, 재귀함수가 종료된 시점에서 다시 시작
*/

function getPermutation(arr) {
  const result = [];
  const used = Array(arr.length).fill(false);

  function permute(arr, output = []) {
    if (output.length === arr.length) {
      // output을 그대로 푸쉬하면 리턴된 result에는 빈배열만 들어가있음
      // for 문 다 돈 후에는 output.pop()으로 output은 빈배열이 됨
      // 그 output을 그대로 참조하고 있으니 모두 빈배열임
      // result에 푸시할 때 output을 복사한(참조하는 것이 아닌) 배열을 저장해야 함
      result.push([...output]);
      return;
    }

    // i 를 시작지점 인덱스로 넣으면
    // [1,3] 이후 2로 다시 돌아갈 수 없어서 0부터 끝까지 돌림
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      output.push(arr[i]);
      permute(arr, output);
      used[i] = false;
      output.pop();
    }
  }

  permute(arr);

  return result;
}
console.log(getPermutation([1, 2, 3]));
