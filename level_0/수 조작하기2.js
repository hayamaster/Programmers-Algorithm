const solution = (numLog) => {
  let answer = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    const subtraction = numLog[i + 1] - numLog[i];
    if (subtraction === 1) {
      answer += "w";
    } else if (subtraction === -1) {
      answer += "s";
    } else if (subtraction === 10) {
      answer += "d";
    } else {
      answer += "a";
    }
  }

  return answer;
};
