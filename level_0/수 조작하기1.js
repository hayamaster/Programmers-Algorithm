const solution = (n, control) => {
  const rules = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  control.split("").forEach((char) => (n += rules[char]));

  return n;
};
