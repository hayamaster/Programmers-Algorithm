function solution(n, times) {
  let max = Math.max(...times) * n;
  let min = 0;

  // 이분탐색
  while (min <= max) {
    const mid = Math.floor((min + max) / 2); // 중간 값
    const persons = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (n <= persons) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}
