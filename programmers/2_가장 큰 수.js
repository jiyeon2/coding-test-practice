function solution(numbers) {
  numbers.sort((a, b) => {
    // 3, 30
    let strA = a.toString(); // "3"
    let strB = b.toString(); // "30"
    let aFirst = strA + strB; // "330"
    let bFirst = strB + strA; // "303"
    if (+aFirst > +bFirst) return -1; // 330 > 303 이므로 3이 앞에 옴
    if (+aFirst < +bFirst) return 1;
    return 0;
  });

  let answer = numbers.join("");
  if (+answer === 0) return "0";
  return answer;
}
