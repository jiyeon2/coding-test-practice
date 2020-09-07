// 처음에 answer만 1234567로 나눴는데 7번 테스트케이스 이후로 다 통과하지 못했다
// 질문하기 게시판에서 글을 보고 각 수를 1234567로 나눈 나머지로 계산하니 통과되었다.

function solution(n) {
    var answer = 0;
    const fibs = [0,1]
    for (let i = 2; i < n+1; i++){
        fibs.push((fibs[i-1]%1234567)+(fibs[i-2]%1234567))
    }
    answer = fibs[n]%1234567;
    return answer;
}