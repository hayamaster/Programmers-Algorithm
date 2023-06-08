const solution = (numbers) => {
  return Math.max(...numbers) === 0
    ? "0"
    : numbers
        .map((x) => String(x))
        .sort((a, b) => b + a - (a + b))
        .join("");
};
