const solution = (my_string) =>
  my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .map((item) => parseInt(item))
    .sort((a, b) => a - b);
