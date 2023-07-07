const solution = (n) =>
  String(n)
    .split("")
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);
