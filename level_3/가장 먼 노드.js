class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front++];
    return value;
  }

  isEmpty() {
    return this.front == this.rear;
  }
}

function solution(n, vertex) {
  // 각 노드에서 방문할 수 있는 노드들을 Map에 저장
  const map = new Map();
  for (const [src, dest] of vertex) {
    if (!map.has(src)) map.set(src, []);
    if (!map.has(dest)) map.set(dest, []);
    map.get(src).push(dest);
    map.get(dest).push(src);
  }

  // 각 노드가 1번으로부터 떨어져있는 거리를 배열에 담기
  // 1번부터 시작하므로 1번째 인덱스의 값은 1로 초기화
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // Queue를 사용하여 노드를 차례대로 방문
  const queue = new Queue();
  queue.enqueue(1); // 1번부터 방문
  while (!queue.isEmpty()) {
    const visit = queue.dequeue();
    // 방문한 노드에서부터 방문할 수 있는 모든 노드들을 찾기
    for (const dest of map.get(visit)) {
      // 해당 노드의 거리가 0이 아니면 건너뛰기
      if (distance[dest] == 0) {
        queue.enqueue(dest);
        distance[dest] += distance[visit] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((x) => x == max).length;
}
