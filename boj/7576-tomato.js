let input = `2 2
1 -1
-1 1`;

input = input.split("\n");

const [col, row] = input.shift().split(" ");

// box는 이차원배열로 토마토 상태 저장
const box = input.map((line) => line.split(" "));

// q : 익은 토마토 저장
const q = [];

// 초기 박스에서 익은 상태인 토마토의 좌표 저장
for (let x = 0; x < row; x++) {
  for (let y = 0; y < col; y++) {
    if (box[x][y] === "1") {
      q.push([x, y]);
    }
  }
}

let days = -1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (q.length) {
  days += 1;
  let count = q.length; // 현재 days에서 익은 토마토 개수 저장
  while (count--) {
    let [x, y] = q.shift();
    // 상하좌우 칸 토마토 확인
    // [x-1, y] [x+1,y] [x, y-1] [x, y+1]
    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];
      if (nextX >= 0 && nextX < row && nextY >= 0 && nextY < col) {
        if (box[nextX][nextY] === "0") {
          box[nextX][nextY] = "1"; // 토마토 익었다고 저장하기
          q.push([nextX, nextY]);
        }
      }
    }
  }
  //   console.table(box);
  //   console.log({ q, days });
  //   console.log("------------------");
}

// 더 이상 익을 수 있는 토마토가 없음
// box에 0이 있는지 확인
let allRipe = true;
outer: for (let x = 0; x < row; x++) {
  for (let y = 0; y < col; y++) {
    if (box[x][y] === "0") {
      allRipe = false;
      break outer;
    }
  }
}

console.log(allRipe ? days : -1);
