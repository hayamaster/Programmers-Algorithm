const solution = (arr) => {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i]);
    i++;
  }

  return stk.length > 0 ? stk : [-1];
};
