const solution = (s1, s2) =>
  s1.reduce((acc, cur) => (acc += s2.includes(cur) ? 1 : 0), 0);
