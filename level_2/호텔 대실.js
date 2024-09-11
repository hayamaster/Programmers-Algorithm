const solution = (book_time) => {
  let stack = [];
  let max = 0;
  const arr = book_time
    .map((each) => each.map((time) => new Date("2024-09-11 " + time).getTime()))
    .sort((a, b) => b[0] - a[0]);

  while (arr.length !== 0) {
    while (stack.length > 0 && arr.at(-1)[0] >= stack.at(-1)[1] + 600000) {
      stack.pop();
    }
    stack.push(arr.pop());
    stack = stack.sort((a, b) => b[1] - a[1]);
    max = Math.max(max, stack.length);
  }

  return max;
};
