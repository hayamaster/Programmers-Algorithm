function solution(keymap, targets) {
  var answer = [];
  for (let i = 0; i < targets.length; i++) {
    let total = 0;
    for (let j = 0; j < targets[i].length; j++) {
      let touchs = 0;
      let idx = 0;
      while (idx < 100) {
        for (let k = 0; k < keymap.length; k++) {
          if (keymap[k][idx] == targets[i][j]) {
            touchs += idx + 1;
            break;
          }
        }
        if (touchs != 0) break;
        idx++;
      }
      if (idx == 100) {
        total = -1;
        break;
      }
      total += touchs;
    }
    answer.push(total);
  }
  return answer;
}
