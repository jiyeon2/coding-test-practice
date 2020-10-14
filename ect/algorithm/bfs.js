// breadth-first-search

// 현재 깊이에 있는 이웃노드를 모두 방문한 후 다음 깊이로 넘어간다
// bfs는 재귀로 동작하지 않는다
// 큐를 이용하는 반복구현만 가능하다.
// 최단 경로를 찾는 다익스트라 알고리즘 등에 사용된다

// dfs와의 차이점
// 1. dfs는 스택 사용, bfs는 큐 사용
// 2. dfs는 스택에서 꺼낸 후 방문(발견)표시, bfs는 큐에 넣기 전 방문(발견)표시

function bfs(graph, start) {
  let discovered = [start]; // 방문한 노드 순서대로 저장할 배열
  let q = [start]; // 방문한 자식노드 저장할 큐

  while (q.length > 0) {
    let v = q.shift();
    let neighbourhood = graph[v];
    neighbourhood.forEach((neighbour) => {
      if (!discovered.includes(neighbour)) {
        discovered.push(neighbour);
        q.push(neighbour);
      }
    });
  }

  return discovered; // 방문한 노드 순서대로 리턴
}

const graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
};

let result = bfs(graph, 1);
console.log(result);
