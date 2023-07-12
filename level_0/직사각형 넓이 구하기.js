const solution = (dots) => {
  const width = dots[0][0] - dots.find((arr) => arr[0] !== dots[0][0])[0];
  const height = dots[0][1] - dots.find((arr) => arr[1] !== dots[0][1])[1];
  return Math.abs(width * height);
};
