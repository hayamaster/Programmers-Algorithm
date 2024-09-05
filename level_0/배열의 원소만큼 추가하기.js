const solution = (arr) => {
  const answer = [];

  arr.forEach((num) => {
    answer.push(...new Array(num).fill(num));
  });
  return answer;
};
