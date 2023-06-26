const solution = (age) => {
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const answer = [];
  while (age) {
    answer.push(alpha[age % 10]);
    age = parseInt(age / 10);
  }
  return answer.reverse().join("");
};
