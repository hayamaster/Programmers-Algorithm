const solution = (numbers) => {
  const answer = Array.from({ length: numbers.length }, () => -1);
  const stack = [];

  numbers.forEach((num, idx) => {
    while (stack.length !== 0 && numbers[stack.at(-1)] < num) {
      answer[stack.pop()] = num;
    }
    stack.push(idx);
  });
  return answer;
};
