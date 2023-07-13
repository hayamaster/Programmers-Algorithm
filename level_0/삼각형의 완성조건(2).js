const solution = (sides) => {
  sides.sort((a, b) => a - b);
  // sides의 가장 큰 값이 긴 변인 경우
  const min1 = sides[1] - sides[0];
  const max1 = sides[1];
  const answer1 = max1 - min1;

  // 구하는 변이 가장 긴 변인 경우
  const min2 = Math.max(...sides) + 1;
  const max2 = sides[0] + sides[1];
  const answer2 = max2 - min2;

  return answer1 + answer2;
};
