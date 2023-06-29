const solution = (box, n) =>
  box.reduce((acc, cur) => (acc *= parseInt(cur / n)), 1);
