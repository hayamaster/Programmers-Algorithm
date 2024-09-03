const solution = (arr) => {
  const stk = [];
  let idx = 0;

  while (idx < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[idx++]);
    }

    stk.at(-1) < arr[idx] ? stk.push(arr[idx++]) : stk.pop();
  }

  return stk;
};
