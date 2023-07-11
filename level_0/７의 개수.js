const solution = (array) =>
  array
    .map((num) => String(num))
    .reduce((acc, cur) => {
      return (acc += cur
        .split("")
        .reduce((subAcc, subCur2) => (subAcc += subCur2 === "7" ? 1 : 0), 0));
    }, 0);
