// 1. 문자열 numbers 통해 만들 수 있는 수열 찾기, [1,7,17,71] 이런식으로
// 2. 찾아낸 수열 중 최대값까지의 소수를 찾기, [2,3,5,7, ... 71] 에라토스테네스의 체 이용
// 3. 소수배열에 존재하지 않는 순열 제외하기, 순열배열x소수배열 길이만큼 for문 돌림..?

// 1번 순열 구하기를 어떻게 코드로 짜는지 모르겠다 
// -> 여기 코드 복붙함 https://stackoverflow.com/questions/9960908/permutations-in-javascript?page=1&tab=votes#tab-top
// 시간복잡도가 어떻게 된건지 모르겠는데 일단 통과했다

function solution(numbers) {
    let count = 0;
    let arrNum = numbers.split('');

    var per = permutator(arrNum); // 순열구하기

    const maxVal = per.reduce(function(a, b) { // 순열 중 최대값찾기
        return Math.max(a, b);
    });

    const primeNumList = getPrimeNumList(maxVal); // 최대값까지 소수배열 만들기

    per.forEach(num => {
        if (primeNumList.includes(num)){
            count += 1;
        }
    })
    return count;
}

function permutator(inputArr){
  let result =[];
  const permute = (arr, m = []) => {
    const joinM = +m.join('');
    if (!result.includes(joinM) && joinM > 1){result.push(joinM);}
    if (arr.length === 0) {
        return;  
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 return result;
}

function getPrimeNumList(maxNum){
    let result = [];
    let isPrime = Array(maxNum+1).fill(1);
    for (let i = 2; i <= Math.sqrt(maxNum+1); i++){
        if (isPrime[i] == 0){continue;}
        for (let j = i+i; j <= maxNum; j += i){
            isPrime[j] = 0;
        }
    }
    isPrime.forEach((value, idx) => {
        if( idx >= 2 && value === 1) {
            result.push(idx);
        }
    })
    return result;
}