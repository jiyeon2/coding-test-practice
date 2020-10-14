let input = `4 5 1
1 2
1 3
1 4
2 4
3 4`;

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

input = input.split("\n");
const [vertexCount, edgeCount, startV] = input[0]
  .split(" ")
  .map((value) => parseInt(value));

let adjacentList = {};

for (let i = 1; i < input.length; i++) {
  let [u, v] = input[i].split(" ").map((value) => parseInt(value));
  adjacentList[u] ? adjacentList[u].push(v) : (adjacentList[u] = [v]);
  adjacentList[v] ? adjacentList[v].push(u) : (adjacentList[v] = [u]);
}

// console.log({ adjacentList, vertexCount, edgeCount, startV });

let visit = Array(vertexCount + 1).fill(false);

function DFS(start, path = []) {
  visit[start] = true;
  path.push(start);

  adjacentList[start].forEach((next) => {
    if (!visit[next]) {
      path = DFS(next, path);
    }
  });

  return path;
}

function BFS(start, path = []) {
  visit[start] = true;
  path.push(start);
  let q = [start];

  while (q.length) {
    let current = q.shift();
    adjacentList[current].forEach((next) => {
      if (!visit[next]) {
        visit[next] = true;
        path.push(next);
        q.push(next);
      }
    });
  }

  return path;
}

const dfsResult = DFS(startV, []);
visit = Array(vertexCount + 1).fill(false);
const bfsResult = BFS(startV, []);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
