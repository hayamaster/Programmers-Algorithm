const solution = (s) => {
  let zeroCount = 0;
  let totalCount = 0;
  while (s != "1") {
    totalCount++;
    let len = s.replace(/0/g, "").length;
    zeroCount += s.length - len;
    s = len.toString(2);
  }
  return [totalCount, zeroCount];
};
