const solution = (my_str, n) => {
  const answer = [];
  my_str = my_str.split("");
  while (my_str.length >= n) {
    answer.push(my_str.splice(0, n).join(""));
  }
  if (my_str.length > 0) answer.push(my_str.join(""));
  return answer;
};
