const solution = (n) => {
  let answer = 1;
  while (fac(answer) <= n) answer++;
  return answer - 1;
};

const fac = (n) => {
  if (n == 1) return 1;
  return fac(n - 1) * n;
};
