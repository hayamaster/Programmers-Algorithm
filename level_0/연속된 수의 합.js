const solution = (num, total) => {
  for (let i = -100; i <= 100; i++) {
    let answer = [];
    for (let j = i; j < i + num; j++) {
      answer.push(j);
    }
    if (answer.reduce((acc, cur) => (acc += cur), 0) === total) return answer;
  }
};
