function solution(board) {
  const row_cnt = board.length;
  const col_cnt = board[0].length;
  let max = 0;
  let dp = new Array(row_cnt);
  for (let i = 0; i < row_cnt; i++) dp[i] = new Array(col_cnt).fill(0);
  if (row_cnt == 1 || col_cnt == 1) return 1;
  for (let i = 0; i < row_cnt; i++) dp[i][0] = board[i][0];
  for (let i = 0; i < col_cnt; i++) dp[0][i] = board[0][i];
  for (let i = 1; i < row_cnt; i++) {
    for (let j = 1; j < col_cnt; j++) {
      if (board[i][j] == 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        if (dp[i][j] > max) max = dp[i][j];
      }
    }
  }
  return max * max;
}
