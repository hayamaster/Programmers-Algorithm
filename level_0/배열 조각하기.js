const solution = (arr, query) => {
  query.forEach((num, index) => {
    index % 2 === 0 ? arr.splice(num + 1) : arr.splice(0, num);
  });

  return arr;
};
