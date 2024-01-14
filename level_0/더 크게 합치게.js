const solution = (a, b) => {
  const case1 = Number(String(a) + String(b));
  const case2 = Number(String(b) + String(a));
  return case1 > case2 ? case1 : case2;
};
