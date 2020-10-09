// 재귀함수를 이용한 dfs
// 코드가 간결하다

function dfs_recursive(graph, v, discovered = []) {
  let copy_discovored = discovered.slice();
  copy_discovored.push(v);

  let neighbourhood = graph[v];
  for (let i = 0; i < neighbourhood.length; i++) {
    let next = neighbourhood[i];
    if (!copy_discovored.includes(next)) {
      copy_discovored = dfs_recursive(graph, next, copy_discovored);
    }
  }

  return copy_discovored;
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

const result = dfs_recursive(graph, 1, []);
console.log(result);
