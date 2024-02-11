const solution = (start_num, end_num) =>
  Array.from(Array(end_num - start_num + 1), (_, idx) => start_num + idx);
