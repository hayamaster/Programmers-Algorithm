const solution = (order) =>
  String(order)
    .split("")
    .reduce(
      (acc, cur) => (acc += cur === "3" || cur === "6" || cur === "9" ? 1 : 0),
      0
    );
