const solution = (intStrs, k, s, l) =>
  intStrs.map((num) => parseInt(num.slice(s, s + l))).filter((num) => num > k);
