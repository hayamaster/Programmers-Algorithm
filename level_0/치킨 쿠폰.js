const solution = (chicken) => {
  let answer = 0;
  while (chicken > 9) {
    const imsy = chicken % 10;
    answer += parseInt(chicken / 10);
    chicken = parseInt(chicken / 10) + imsy;
  }
  return answer;
};
