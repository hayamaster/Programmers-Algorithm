function solution(s) {
  const arr = s.split(" ").map((x) => parseInt(x));
  return String(Math.min(...arr)) + " " + String(Math.max(...arr));
}
