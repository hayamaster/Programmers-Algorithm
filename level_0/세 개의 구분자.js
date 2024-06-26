const solution = (myStr) => {
  const answer = myStr.split(/a|b|c/).filter((item) => item);

  return answer.length === 0 ? ["EMPTY"] : answer;
};
