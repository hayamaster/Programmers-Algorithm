const solution = (spell, dic) => {
  let flag = false;
  spell.sort();
  dic.forEach((word) => {
    const arr = word.split("").sort();
    if (arr.join("") == spell.join("")) flag = true;
  });
  return flag ? 1 : 2;
};
