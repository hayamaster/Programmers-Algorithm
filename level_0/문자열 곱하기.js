const solution = (my_string, k) =>
  Array.from({ length: k }, () => my_string).reduce(
    (acc, cur) => (acc += cur),
    ""
  );
