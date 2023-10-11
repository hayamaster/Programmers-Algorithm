const solution = (n, left, right) => {
  const answer = [];
  const rowArrays = new Map();

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;

    if (!rowArrays.has(row)) {
      const arr = [];
      for (let j = 0; j < n; j++) {
        arr.push(j - row < 0 ? row + 1 : j + 1);
      }
      answer.push(arr[col]);
      rowArrays.set(row, arr);
    } else {
      const arr = rowArrays.get(row);
      answer.push(arr[col]);
    }
  }

  return answer;
};
