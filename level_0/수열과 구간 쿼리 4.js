const solution = (arr, queries) => {
  queries.forEach((query) => {
    const [s, e, k] = query;

    for (let i = s; i < e + 1; i++) {
      if (i % k === 0) {
        arr[i]++;
      }
    }
  });

  return arr;
};
