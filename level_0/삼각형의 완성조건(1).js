const solution = (sides) => {
  const max = Math.max(...sides);
  for (let i = 0; i < 3; i++) {
    if (sides[i] === max) {
      sides.splice(i, 1);
      break;
    }
  }
  return max < sides[0] + sides[1] ? 1 : 2;
};
