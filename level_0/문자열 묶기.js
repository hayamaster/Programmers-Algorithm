const solution = (strArr) => {
  const obj = {};

  strArr.forEach((str) => {
    const len = str.length;

    if (obj[len]) {
      obj[len]++;
    } else {
      obj[len] = 1;
    }
  });

  return Math.max(...Object.values(obj));
};
