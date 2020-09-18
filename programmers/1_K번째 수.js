function solution(array, commands) {
  var answer = [];

  for (let t = 0; t < commands.length; t++) {
    const [i, j, k] = commands[t];
    const slicedArr = array.slice(i - 1, j); // 인덱스 주의
    const sortedArr = slicedArr.sort((a, b) => a > b);
    answer.push(sortedArr[k - 1]);
  }
  return answer;
}

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    const [start, end, k] = commands[i];
    const kNum = array.slice(start - 1, end).sort((a, b) => a - b)[k - 1];
    answer.push(kNum);
  }
  return answer;
}

//compareFunction
//Specifies a function that defines the sort order.
// If omitted, the array elements are converted to strings,
// then sorted according to each character's Unicode code point value

// compareFunction이 제공되지 않으면 요소를 문자열로 변환하고
//유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다.
// 예를 들어 "바나나"는 "체리"앞에옵니다.
// 숫자 정렬에서는 9가 80보다 앞에 오지만 숫자는 문자열로 변환되기 때문에 "80"은 유니 코드 순서에서 "9"앞에옵니다.
