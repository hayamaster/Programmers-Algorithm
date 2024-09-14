const solution = (my_strings, parts) => {
  let answer = "";
  my_strings.forEach(
    (strings, idx) =>
      (answer += strings.slice(parts[idx][0], parts[idx][1] + 1))
  );

  return answer;
};
