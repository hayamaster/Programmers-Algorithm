const solution = (emergency) => {
  const result = [...emergency];
  for (let order = 1; order < emergency.length + 1; order++) {
    const max = Math.max(...emergency);
    result[emergency.indexOf(max)] = order;
    emergency[emergency.indexOf(max)] = 0;
  }
  return result;
};
