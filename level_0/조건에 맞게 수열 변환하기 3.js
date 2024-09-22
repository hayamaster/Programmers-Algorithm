const solution = (arr, k) =>
  arr.map((num) => (k % 2 === 0 ? num + k : num * k));
