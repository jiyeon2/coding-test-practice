function isConvertable(from, to) {
  let tolerance = 1;
  for (let i = 0; i < from.length; i++) {
    if (from[i] !== to[i]) {
      if (--tolerance < 0) return false;
    }
  }
  // 한개의 알파벳이 달라야 변환 가능하다
  // 같은 단어인 경우(하나의 알파벳도 다르지 않은 경우)도 true로 반환했더니 tc 1번이 계속 틀림
  return tolerance === 0;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let level = 0; // 현재 단계
  let q = [begin]; // 현재 단계

  while (words.length) {
    let nextAvailable = []; // 변환가능한 단어 저장할 배열
    // q 배열을 돌면서 변경 가능한 단어를 저장함
    for (let i = 0; i < q.length; i++) {
      let currentWord = q[i];
      // 변경 가능한 단어 추려냄
      let filtered = words.filter((otherWord, index, arr) => {
        if (isConvertable(currentWord, otherWord)) {
          arr.splice(index, 1); // words 배열에서 삭제하여 중복으로 저장되지 않도록 함
          return true;
        }
        return false;
      });

      nextAvailable = nextAvailable.concat(filtered);
    }

    level += 1; // 현재 단계에서 변경가능한 단어를 모두 찾았으므로 단계를 증가시킴

    // 변경 가능한 단어에 타겟단어가 포함되어 있다면 단계를 리턴
    // 타겟단어가 없다면 q를 갱신함
    if (nextAvailable.includes(target)) {
      return level;
    } else {
      q = nextAvailable;
    }
  }

  return answer;
}

const result = solution("hot", "lot", ["hot", "dot", "dog", "lot", "log"]);
// const result = solution("hit", "cog", [
//   "hot",
//   "dot",
//   "dog",
//   "lot",
//   "log",
//   "cog",
// ]);
console.log(result);
