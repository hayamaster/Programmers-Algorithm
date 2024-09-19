const solution = (q, r, code) =>
  code
    .split("")
    .filter((char, idx) => idx % q === r)
    .join("");
