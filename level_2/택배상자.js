const solution = (order) => {
  const asc = Array.from({ length: order.length }, (_, index) => index + 1);
  const bojo = [];
  let orderIndex = 0;

  asc.forEach((item) => {
    while (bojo.length > 0) {
      if (bojo.at(-1) !== order[orderIndex]) break;

      bojo.pop();
      orderIndex++;
    }

    if (item !== order[orderIndex]) {
      bojo.push(item);
    } else {
      orderIndex++;
    }
  });

  while (bojo.length > 0) {
    if (bojo.at(-1) !== order[orderIndex]) break;

    bojo.pop();
    orderIndex++;
  }

  return orderIndex;
};
