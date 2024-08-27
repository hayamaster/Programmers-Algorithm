const pow = (a, b, c, p) => Math.pow(a, p) + Math.pow(b, p) + Math.pow(c, p);

const solution = (a, b, c) => {
  if (a === b && b === c) {
    return pow(a, b, c, 1) * pow(a, b, c, 2) * pow(a, b, c, 3);
  } else if (a === b || b === c || c === a) {
    return pow(a, b, c, 1) * pow(a, b, c, 2);
  } else {
    return pow(a, b, c, 1);
  }
};
