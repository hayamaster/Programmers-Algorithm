const solution = (numlist, n) =>
  numlist
    .sort((a, b) => b - a)
    .sort((a, b) => (Math.abs(n - a) < Math.abs(n - b) ? -1 : 1));
