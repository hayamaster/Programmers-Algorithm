const solution = (a, d, included) =>
  included.reduce((acc, cur, idx) => (acc += cur ? a + d * idx : 0), 0);
