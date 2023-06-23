const solution = (my_string, letter) =>
  my_string
    .split("")
    .filter((char) => char != letter)
    .join("");
