const solution = (n, k) =>
  Array.from({ length: n }, (_, index) => index + 1).filter(
    (num) => num % k === 0
  );
