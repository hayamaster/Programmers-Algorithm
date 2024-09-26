const solution = (number) =>
  number.split("").reduce((acc, cur) => (acc += parseInt(cur)), 0) % 9;
