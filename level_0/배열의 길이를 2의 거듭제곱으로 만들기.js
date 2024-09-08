const solution = (arr) => {
  let powNum = 0;
  while (Math.pow(2, powNum) < arr.length) {
    powNum++;
  }

  if (Math.pow(2, powNum) > arr.length) {
    const originLength = arr.length;

    for (let i = 0; i < Math.pow(2, powNum) - originLength; i++) {
      arr.push(0);
    }
  }

  return arr;
};
