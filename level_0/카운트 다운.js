const solution = (start, end_num) =>
  Array.from(Array(start - end_num + 1), (_, index) => start - index);
