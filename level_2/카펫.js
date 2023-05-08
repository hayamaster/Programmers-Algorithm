function solution(brown, yellow) {
  const total = brown + yellow;
  let row;
  let col;

  for (col = 3; col < Math.sqrt(total) + 1; col++) {
    if (total % col != 0) continue;
    row = total / col;
    if (col > row) break;
    if (yellow / (col - 2) > row - 2) continue;
    return [row, col];
  }
}
