const solution = (arr, queries) => {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  });
  return arr;
};
