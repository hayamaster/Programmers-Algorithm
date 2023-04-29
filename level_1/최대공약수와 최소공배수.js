const solution = (n, m) => [gcd(n, m), lcm(n, m, gcd(n, m))];

const gcd = (n, m) => {
  if (m % n != 0) return gcd(m % n, n);
  return n;
};

const lcm = (n, m, gcd) => {
  return (n * m) / gcd;
};
