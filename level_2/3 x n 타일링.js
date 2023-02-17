function solution(n) {
  dp = new Array(n).fill(0);
  if (n % 2 == 1) return 0;
  dp[2] = 3;
  dp[4] = 11;
  for (let i = 6; i <= n; i++) {
    if (i % 2 == 0)
      dp[i] =
        (((4 * dp[i - 2]) % 1000000007) -
          (dp[i - 4] % 1000000007) +
          1000000007) %
        1000000007;
  }
  return dp[n];
}
