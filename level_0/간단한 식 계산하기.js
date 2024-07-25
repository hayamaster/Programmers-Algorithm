const solution = (binomial) => {
  const [a, op, b] = binomial.split(" ");

  if (op === "+") {
    return parseInt(a) + parseInt(b);
  } else if (op === "-") {
    return parseInt(a) - parseInt(b);
  } else {
    return parseInt(a) * parseInt(b);
  }
};
