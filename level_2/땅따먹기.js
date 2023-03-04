const solution = (land) => {
  let dp = land;
  for (let i = 1; i < land.length; i++) {
    dp[i][0] += Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]);
    dp[i][1] += Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]);
    dp[i][2] += Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]);
    dp[i][3] += Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(...dp[land.length - 1]);
};
