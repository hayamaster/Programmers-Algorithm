const solution = (my_string) =>
  my_string
    .replace(/[^0-9]/g, " ")
    .split(" ")
    .filter((item) => item !== "")
    .reduce((acc, cur) => (acc += parseInt(cur)), 0);
