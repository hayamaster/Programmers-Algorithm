const solution = (common) => {
  if (common[1] - common[0] === common[2] - common[1]) {
    const addingNum = common[1] - common[0];
    return common[common.length - 1] + addingNum;
  }
  return common[common.length - 1] * (common[1] / common[0]);
};
