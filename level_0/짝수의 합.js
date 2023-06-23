const solution = (n) =>
  Array(n)
    .fill()
    .map((v, i) => i + 1)
    .reduce((acc, cur) => (acc += cur % 2 == 0 ? cur : 0), 0);
