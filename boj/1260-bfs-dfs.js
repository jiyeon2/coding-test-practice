const input = `5 5 3
5 4
5 2
1 2
3 4
3 1`.split("\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [vertexCount, edgeCount, startV] = input[0]
  .split(" ")
  .map((value) => parseInt(value));

// 인접 리스트 만들기
// 길이가 vertexCount+1인 배열 만들고, 각 요소를 빈 배열[]로 초기화함
let adjacentList = Array.from(new Array(vertexCount + 1), () => []);
// input을 순회하며 연결된 노드 저장
for (let i = 1; i < input.length; i++) {
  let [u, v] = input[i].split(" ").map((value) => parseInt(value));
  adjacentList[u].push(v);
  adjacentList[v].push(u);
}
// 인접 리스트 오름차순으로 정렬
for (let v in adjacentList) {
  adjacentList[v].sort((a, b) => a - b);
}

// DFS
function DFS(start) {
  // hasVisited : 해당 노드 방문했는지 여부 저장하는 배열
  const hasVisited = new Array(vertexCount + 1).fill(false);
  // path : 노드를 방문한 순서대로 저장할 배열
  const path = [];

  // 재귀함수
  function recursive(start, path = []) {
    // 현재 노드를 방문처리하고 path 에 저장함
    path.push(start);
    hasVisited[start] = true;

    // 현재노드의 이웃노드에 대해
    // 방문하지 않았다면 방문한 후 리턴된 path 저장
    adjacentList[start].forEach((next) => {
      if (!hasVisited[next]) {
        path = recursive(next, path);
      }
    });

    return path;
  }

  return recursive(start, path);
}

// BFS
function BFS(start) {
  // hasVisited : 해당 노드 방문했는지 여부 저장하는 배열
  const hasVisited = new Array(vertexCount + 1).fill(false);
  // path : 노드를 방문한 순서대로 저장할 배열
  let path = [start];
  // q : 다음에 탐색할 이웃 노드 저장할 큐
  let q = [start];
  hasVisited[start] = true;

  while (q.length > 0) {
    // current : 큐의 맨 앞에서 꺼낸 현재 노드
    let current = q.shift();
    // 현재노드의 이웃노드에 대해,
    // 방문하지 않았으면 방문처리 하고, 큐와 path에 저장함
    adjacentList[current].forEach((next) => {
      if (!hasVisited[next]) {
        hasVisited[next] = true;
        path.push(next);
        q.push(next);
      }
    });
  }

  return path;
}

const dfsResult = DFS(startV);
const bfsResult = BFS(startV);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
