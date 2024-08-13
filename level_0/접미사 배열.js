const solution = (my_string) =>
  my_string
    .split("")
    .map((_, idx) => my_string.slice(idx))
    .sort();
