const solution = (n) => {
  let answer = 0;
  const 홀짝 = n % 2;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 홀짝) {
      if (홀짝 === 0) {
        answer += Math.pow(i, 2);
      } else {
        answer += i;
      }
    }
  }

  return answer;
};
