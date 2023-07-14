const solution = (dots) => {
  const comb = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];
  let answer = 0;
  comb.forEach((cases) => {
    const x1 = dots[cases[0]][0] - dots[cases[1]][0];
    const y1 = dots[cases[0]][1] - dots[cases[1]][1];
    const x2 = dots[cases[2]][0] - dots[cases[3]][0];
    const y2 = dots[cases[2]][1] - dots[cases[3]][1];
    if (Math.abs(y1 / x1) === Math.abs(y2 / x2)) answer = 1;
  });
  return answer;
};
