const solution = (num_str) =>
  num_str
    .split("")
    .map((str) => parseInt(str))
    .reduce((acc, cur) => (acc += cur), 0);
