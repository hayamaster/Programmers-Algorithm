const solution = (numer1, denom1, numer2, denom2) => {
  let n = numer1 * denom2 + numer2 * denom1;
  let d = denom1 * denom2;
  const gcd = (num1, num2) => (num2 > 0 ? gcd(num2, num1 % num2) : num1);
  return [n / gcd(n, d), d / gcd(n, d)];
};
