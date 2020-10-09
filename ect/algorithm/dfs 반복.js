// 스택을 이용한 dfs
// 재귀로 구현한 dfs보다 코드가 길지만
// 직관적이고 이해하기 쉽다, 실행속도도 더 빠르다

function dfs_iterative(graph, start) {
  let discovered = [];
  let stack = [start];
  while (stack.length > 0) {
    let v = stack.pop();
    if (!discovered.includes(v)) {
      discovered.push(v);
      let neighbourhood = graph[v];
      for (let i = 0; i < neighbourhood.length; i++) {
        stack.push(neighbourhood[i]);
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

let result = dfs_iterative(graph, 1);
console.log(result);
