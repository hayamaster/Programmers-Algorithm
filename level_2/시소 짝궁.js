const solution = (weights) => {
  let answer = 0;
  const ratios = [3 / 2, 4 / 2, 4 / 3];
  const dic = {};
  const sortedWeights = [...new Set(weights)].sort((a, b) => a - b);

  weights.forEach((weight) => {
    if (dic[weight]) {
      dic[weight]++;
    } else {
      dic[weight] = 1;
    }
  });

  for (const key in dic) {
    if (dic[key] > 1) {
      answer += (dic[key] * (dic[key] - 1)) / 2;
    }
  }

  sortedWeights.forEach((weight) => {
    ratios.forEach((ratio) => {
      if (dic[weight * ratio]) {
        answer += dic[weight] * dic[weight * ratio];
      }
    });
  });

  return answer;
};
