const getPermutations = (array) => {
  const result = [];

  const permute = (arr, memo = []) => {
    if (arr.length === 0) {
      result.push(memo);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const current = arr.slice();
        const next = current.splice(i, 1);
        permute(current.slice(), memo.concat(next));
      }
    }
  };

  permute(array);

  return result;
};

const solution = (k, dungeons) => {
  const permutation = getPermutations(dungeons);
  let maxCount = 0;

  permutation.forEach((explores) => {
    let 남은피로도 = k;
    const currentCount = explores.reduce((acc, [min, somo]) => {
      if (남은피로도 >= min) {
        남은피로도 -= somo;
        acc++;
      }
      return acc;
    }, 0);

    maxCount = Math.max(maxCount, currentCount);
  });

  return maxCount;
};
