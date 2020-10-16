function solution(tickets) {
  var answer = [];

  let map = {}; // {출발공항 : [도착공항, 티켓사용여부], ... }
  for (let [from, to] of tickets) {
    map[from] ? map[from].push([to, false]) : (map[from] = [[to, false]]);
  }
  for (let from in map) {
    map[from].sort((a, b) => (a[0] > b[0] ? 1 : -1)); // 출발공항 별 도착 경로 오름차순 정렬
  }

  // graph : map
  // start : 출발공항
  // left  : 남은 티켓 개수
  // path  : 여행경로 리스트
  function dfs(graph, start, left, path) {
    path.push(start); // 경로에 출발공항 저장

    // 남은 티켓이 없으면 answer에 경로 저장하고 리턴
    if (!left) {
      answer.push(path);
      return;
    }

    // 해당공항에서 출발하는 티켓이 없는경우 함수 종료
    if (!graph[start]) return;
    // 해당공항에서 출발하는 티켓이 있는 경우,
    // next[0] : 도착공항
    // next[1] : 티켓사용여부 bool
    graph[start].forEach((next) => {
      if (!next[1]) {
        // 사용하지 않은 티켓인 경우
        next[1] = true; // 사용처리
        // 도착공항을 출발공항으로 하고, 남은 티켓개수 -1 하고
        // path 복사한 값으로 dfs재귀  (복사한 값을 넣지 않으면 틀림 - 이부분 이해를 못함)
        dfs(graph, next[0], left - 1, path.slice());
        // 재귀함수 종료 후 티켓사용여부 원상복귀
        next[1] = false;
      }
    });
  }

  dfs(map, "ICN", tickets.length, []);
  // 백트래킹 방식으로 모든 경우를 다 탐색하고
  // 조건에 맞는(티켓을 모두 사용한) 경우만 answer에 넣음
  // 가능한 경로가 여러개인 경우 알파벳 순서가 앞서는 경로를 리턴해야 한다는 조건때문에
  // 티켓을 오름차순으로 정렬하고 탐색했음 -> 첫번째 결과가 알파벳 순서가 가장 앞선 경로임

  return answer[0];
}
// dfs함수 내에서 처음으로 모든 티켓 사용한 경우 path 리턴하고 종료하고 싶은데
// 어떻게 코드를 짜야할까?
