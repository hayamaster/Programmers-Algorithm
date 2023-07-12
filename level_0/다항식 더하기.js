const solution = (polynomial) => {
  const arr = polynomial.replace(/\s/g, "").split(/[+]/);
  let a = 0;
  let b = 0;
  arr.forEach((item) => {
    if (item.includes("x")) {
      a += item === "x" ? 1 : parseInt(item.slice(0, -1));
    } else {
      b += parseInt(item);
    }
  });
  const plus = a > 0 && b > 0 ? true : false;
  return `${a ? (a === 1 ? "x" : a + "x") : ""}${plus ? " + " : ""}${
    b ? b : ""
  }`;
};
