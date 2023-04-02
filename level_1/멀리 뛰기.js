let fibo = [0];

function solution(n) {
  if (n < 2) {
    fibo[n] = 1;
  }
  if (!fibo[n]) {
    fibo[n] = (solution(n - 1) + solution(n - 2)) % 1234567;
  }
  return fibo[n];
}
