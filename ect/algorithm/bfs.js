// bfs는 재귀로 동작하지 않는다
// 큐를 이용하는 반복구현만 가능하다.
// 최단 경로를 찾는 다익스트라 알고리즘 등에 사용된다

function bfs(graph, start) {
  let discovered = [start];
  let q = [start];
  while (q.length > 0) {
    let v = q.shift();
    let neighbourhood = graph[v];
    for (let i = 0; i < neighbourhood.length; i++) {
      let next = neighbourhood[i];
      if (!discovered.includes(next)) {
        discovered.push(next);
        q.push(next);
      }
    }
  }
  return discovered;
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
