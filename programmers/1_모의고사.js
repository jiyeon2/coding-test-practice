function solution(answers) {
  var answer = [];
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0]; // 각 수포자 정답 개수 저장

  // 수포자1의 답패턴 배열 길이는 5개이므로
  // answers배열이 6개인 경우 첫번째 답패턴에 접근하기 위해
  // 6번 문제 답을 체크할 때는 6 % 5 (i % p1.length) 번째 인덱스로 패턴배열에 접근함
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) count[0]++;
    if (answers[i] === p2[i % p2.length]) count[1]++;
    if (answers[i] === p3[i % p3.length]) count[2]++;
  }

  // 정답 개수 저장한 배열 count [5,0,0] 을
  // {수포자 번호, 정답개수} 형태로 만들어서 정렬함
  // count = [ { id: 1, value: 5 }, { id: 2, value: 0 }, { id: 3, value: 0 } ]
  count = count
    .map((value, index) => {
      return { id: index + 1, value };
    })
    .sort((a, b) => b.value - a.value);

  const maxVal = count[0].value;
  for (let i = 0; i < count.length; i++) {
    if (count[i].value === maxVal) {
      answer.push(count[i].id);
    } else {
      break;
    }
  }

  return answer;
}
