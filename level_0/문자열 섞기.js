const solution = (str1, str2) =>
  str1.split("").reduce((acc, cur, index) => (acc += cur + str2[index]), "");
