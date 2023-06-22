const solution = (my_string, n) => {
  let answer = "";
  my_string.split("").forEach((char) => {
    for (let i = 0; i < n; i++) {
      answer += char;
    }
  });
  return answer;
};
