const solution = (arr) => {
  let answer = 0;
  let flag = true;

  while (true) {
    flag = true;
    answer++;

    arr = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        flag = false;
        return num % 2;
      } else if (num < 50 && num % 2 === 1) {
        flag = false;
        return num * 2 + 1;
      } else {
        return num;
      }
    });

    if (flag === true) break;
  }

  return answer - 1;
};
