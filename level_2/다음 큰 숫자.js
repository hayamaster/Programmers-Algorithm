const solution = (n) => {
  const count = String(n.toString(2))
    .split("")
    .reduce((acc, cur) => (cur == 1 ? (acc += 1) : acc), 0);
  let cnt = 0;
  while (cnt != count) {
    n++;
    cnt = String(n.toString(2))
      .split("")
      .reduce((acc, cur) => (cur == 1 ? (acc += 1) : acc), 0);
  }
  return n;
};
