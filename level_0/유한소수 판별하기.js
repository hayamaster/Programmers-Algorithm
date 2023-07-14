const solution = (a, b) => {
  b /= getGCD(a, b);
  while (b > 1) {
    if (b % 5 === 0) {
      b /= 5;
    } else if (b % 2 === 0) {
      b /= 2;
    } else {
      return 2;
    }
  }
  return 1;
};

const getGCD = (num1, num2) => {
  for (let i = Math.min(num1, num2); i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) return i;
  }
};
