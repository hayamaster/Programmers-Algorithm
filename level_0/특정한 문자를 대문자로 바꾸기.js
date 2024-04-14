const solution = (my_string, alp) =>
  my_string
    .split("")
    .map((char) => (char === alp ? char.toUpperCase() : char))
    .join("");
