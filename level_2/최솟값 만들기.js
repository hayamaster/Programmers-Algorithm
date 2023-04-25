function solution(A, B) {
  const a = A.sort((x, y) => x - y);
  const b = B.sort((x, y) => y - x);
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
