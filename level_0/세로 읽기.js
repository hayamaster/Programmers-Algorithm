const solution = (my_string, m, c) => {
  let result = "";
  let i = 0;

  while (i * m + c <= my_string.length) {
    result += my_string[i * m + c - 1];
    i++;
  }

  return result;
};
