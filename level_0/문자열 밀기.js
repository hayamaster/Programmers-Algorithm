const solution = (A, B) => {
  let a = A.split("");
  let count = 0;
  while (a.join("") !== B) {
    if (count > a.length) return -1;
    const temp = a.pop();
    a.unshift(temp);
    count++;
  }
  return count;
};
