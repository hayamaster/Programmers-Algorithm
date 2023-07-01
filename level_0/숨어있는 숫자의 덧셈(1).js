const solution = (my_string) =>
  my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);
