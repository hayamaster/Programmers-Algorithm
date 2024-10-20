const solution = (arr, queries) => {
  queries.forEach(([from, to]) => {
    const temp = arr[from];

    arr[from] = arr[to];
    arr[to] = temp;
  });

  return arr;
};
