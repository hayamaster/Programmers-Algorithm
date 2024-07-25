const solution = (arr, n) =>
  arr.length % 2
    ? arr.map((num, idx) => (idx % 2 ? num : num + n))
    : arr.map((num, idx) => (idx % 2 ? num + n : num));
