const solution = (numbers, n) =>
  numbers.reduce((acc, cur) => (acc = acc <= n ? acc + cur : acc), 0);
