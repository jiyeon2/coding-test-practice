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
  let used = Object.fromEntries(words.map((word) => [word, 0]));
  let q = [];
  words.forEach((word) => {
    if (isConvertable(begin, word)) {
      q.push(word);
      used[word] = 1;
    }
  });

  while (q.length) {
    let current = q.shift();
    for (let i = 0; i < words.length; i++) {
      let next = words[i];
      if (isConvertable(current, next) && !used[next]) {
        if (next === target) {
          return used[current] + 1;
        }
        q.push(next);
        used[next] = used[current] + 1;
      }
    }
  }

  return answer;
}
