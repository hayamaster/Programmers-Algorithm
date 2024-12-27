const solution = (my_string, queries) => {
  let answer = my_string.split("");

  queries.forEach(([one, two]) => {
    answer = [
      ...answer.slice(0, one),
      ...answer.slice(one, two + 1).reverse(),
      ...answer.slice(two + 1, answer.length + 1),
    ];
  });

  return answer.join("");
};
