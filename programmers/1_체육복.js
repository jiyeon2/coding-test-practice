// 도난당한 학생과 여분 가지고 있는 학생들의 체육복 개수 배열을 만들고
// 체육복이 0개인 학생의 경우
// 앞번호 학생이 여분이 2개인 경우 1개 빌리고 answer += 1 하고 continue,
// 뒷번호 학생이 여분이 2개인 경우 1개 빌리고 answer += 1 하고 continue,
// 체육복이 1개 이상인 경우는 그냥 answer += 1

// for 루프 안에서 includes쓰니까 O(n^2)

function solution(n, lost, reserve) {
  var answer = 0;
  let arr = []; // 학생이 가진 체육복 저장하는 배열

  for (let i = 1; i <= n; i++) {
    let cloth = 1;
    if (lost.includes(i)) cloth -= 1;
    if (reserve.includes(i)) cloth += 1;
    arr.push(cloth);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i - 1 >= 0 && arr[i - 1] === 2) {
        arr[i] = 1;
        answer += 1;
        arr[i - 1] -= 1;
        continue;
      }
      if (i + 1 < arr.length && arr[i + 1] === 2) {
        arr[i] = 1;
        answer += 1;
        arr[i + 1] -= 1;
        continue;
      }
      continue;
    }
    answer += 1;
  }
  // console.log(arr)
  return answer;
}
