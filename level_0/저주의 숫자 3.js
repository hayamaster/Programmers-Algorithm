const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer++;
    if ((answer !== 0 && answer % 3 == 0) || String(answer).includes("3")) {
      i--;
    }
  }
  return answer;
};
