const solution = (maps) => {
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  const bfs = () => {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [];
    maps[0][0] = 0;
    queue.push([0, 0, 1]);

    while (queue.length) {
      let [x, y, cnt] = queue.shift();
      if (x == n && y == m) return cnt;
      for (let i = 0; i < 4; i++) {
        let cx = x + dx[i];
        let cy = y + dy[i];
        if (cx < 0 || cx > n || cy < 0 || cy > m) continue;
        if (maps[cx][cy] == 0) continue;
        maps[cx][cy] = 0;
        queue.push([cx, cy, cnt + 1]);
      }
    }
    return -1;
  };
  return bfs();
};
