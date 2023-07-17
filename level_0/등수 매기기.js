const solution = (score) => {
  const array = score.map((arr) => arr[0] + arr[1]);
  const rankArr = [...array].sort((a, b) => b - a);
  const dic = {};
  rankArr.forEach((num, idx) => {
    if (!dic[num]) dic[num] = idx + 1;
  });
  return array.map((num) => dic[num]);
};
