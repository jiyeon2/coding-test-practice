// 1. 문자열 numbers 통해 만들 수 있는 수열 찾기, [1,7,17,71] 이런식으로
// 2. 찾아낸 수열 중 최대값까지의 소수를 찾기, [2,3,5,7, ... 71] 에라토스테네스의 체 이용
// 3. 소수배열에 존재하지 않는 순열 제외하기, 순열배열x소수배열 길이만큼 for문 돌림..?

// 1번 순열 구하기를 어떻게 코드로 짜는지 모르겠다
// -> 여기 코드 복붙함 https://stackoverflow.com/questions/9960908/permutations-in-javascript?page=1&tab=votes#tab-top
// 시간복잡도가 어떻게 된건지 모르겠는데 일단 통과했다

// 1. 입력된 숫자로 만들 수 있는 모든 순열 만들기
// 2. 순열의 최대값까지 존재하는 소수 찾기
// 3. 만든 순열 배열을 돌면서 소수인지 아닌지 확인하기

function solution(numbers) {
  let count = 0;

  // 입력된 문자열을 배열형태로 바꿈
  let arrNum = numbers.split("");

  // 숫자로 만들 수 있는 모든 순열구하기
  var per = permutator(arrNum);

  // 만들어진 순열 중 최대값 찾기
  const maxVal = per.reduce((a, b) => Math.max(a, b));

  // 최대값 까지의 소수 배열 구하기
  const primeNumList = getPrimeNumList(maxVal);

  // 만들어진 순열을 for문으로 돌면서 소수배열에 있는지 없는지 확인함으로써 소수 판별..
  per.forEach((num) => {
    if (primeNumList.includes(num)) {
      count += 1;
    }
  });
  return count;
}
// console.log(solution("123"));

// 주어진 숫자배열로 만들 수 있는 순열 반환
function permutator(inputArr) {
  let result = []; // 가능한 순열 저장
  let used = Array(inputArr.length).fill(false); // 해당 숫자가 사용되었는지 여부 저장

  // 순열 만드는 재귀함수
  const permute = (arr, output = []) => {
    // console.log("permute함수 시작--------------, 입력된 output:", output);
    const num = +output.join(""); // output 배열을 숫자형을 만듦

    if (!result.includes(num) && num > 1) {
      // 1은 소수가 아니라 제외함
      // console.log("만들어진 숫자 :", num);
      result.push(num);
    }
    //주어진 배열로 만들 수 있는 최대 길이이면 함수 종료
    if (num.length === arr.length) return;

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      output.push(arr[i]);
      // console.log("permute 재귀 이전 상태", { used, output });
      permute(arr, output);
      used[i] = false;
      output.pop();
      // console.log("permute 재귀 빠져나온 후 상태", { used, output });
    }
  };
  permute(inputArr);
  return result;
}
// console.log(permutator("123"));

// 주어진 수까지의 소수배열 만드는 함수
function getPrimeNumList(maxNum) {
  let result = [];
  let isPrime = Array(maxNum + 1).fill(1);
  for (let i = 2; i <= Math.sqrt(maxNum + 1); i++) {
    if (isPrime[i] === 0) continue;
    for (let j = i + i; j <= maxNum; j += i) {
      isPrime[j] = 0;
    }
  }
  for (let i = 0; i < isPrime.length; i++) {
    if (i >= 2 && isPrime[i] === 1) result.push(i);
  }
  return result;
}
// console.log(getPrimeNumList(10));
