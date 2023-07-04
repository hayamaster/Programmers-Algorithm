const solution = (cipher, code) => {
  let answer = "";
  let multiple = 1;
  while (code * multiple <= cipher.length) {
    answer += cipher[code * multiple - 1];
    multiple++;
  }
  return answer;
};
