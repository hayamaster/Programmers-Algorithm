const solution = (n) => {
  const answer = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      if (n % i == 0) {
        answer.push(i);
      }
    }
  }
  return answer;
};
