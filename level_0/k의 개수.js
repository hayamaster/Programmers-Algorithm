const solution = (i, j, k) => {
  let answer = 0;
  for (let num = i; num <= j; num++) {
    if (String(num).includes(String(k))) {
      const arr = String(num).split("");
      arr.forEach((char) => {
        if (char === String(k)) answer++;
      });
    }
  }
  return answer;
};
