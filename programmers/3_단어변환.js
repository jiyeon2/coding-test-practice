// https://programmers.co.kr/questions/8601

function isConvertable(from, to) {
  let tolerance = 1;
  for (let i = 0; i < from.length; i++) {
    if (from[i] !== to[i]) {
      tolerance -= 1;
      if (tolerance < 0) return false;
    }
  }
  return true;
}
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  var answer = 0;
  let level = 0;
  let q = [begin];

  while (words.length) {
    let nextAvailable = [];
    for (let i = 0; i < q.length; i++) {
      let currentWord = q[i];
      let filtered = words.filter((otherWord, index, arr) => {
        if (isConvertable(currentWord, otherWord)) {
          arr.splice(index, 1); // words 배열에서 삭제
          return true;
        }
        return false;
      });
      nextAvailable = nextAvailable.concat(filtered);
    }
    level += 1;
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
