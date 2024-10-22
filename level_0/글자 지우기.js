const solution = (my_string, indices) =>
  my_string
    .split("")
    .filter((_, idx) => !indices.includes(idx))
    .join("");
