function solution(a, b) {
  a = a.map((x, idx) => x * b[idx]);
  return a.reduce((acc, cur) => (acc += cur));
}
