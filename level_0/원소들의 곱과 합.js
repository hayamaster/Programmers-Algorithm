const solution = (num_list) => {
  const multi = num_list.reduce((acc, cur) => (acc *= cur), 1);
  const pow = Math.pow(
    num_list.reduce((acc, cur) => (acc += cur), 0),
    2
  );

  return multi < pow ? 1 : 0;
};
