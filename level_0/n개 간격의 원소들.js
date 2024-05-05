const solution = (num_list, n) =>
  num_list.filter((_, index) => index % n === 0);
