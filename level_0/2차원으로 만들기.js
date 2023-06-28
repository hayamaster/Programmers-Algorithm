const solution = (num_list, n) => {
  const answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    const imsy = [];
    for (let j = 0; j < n; j++) {
      imsy.push(num_list[i + j]);
    }
    answer.push(imsy);
  }
  return answer;
};
