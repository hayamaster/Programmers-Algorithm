const solution = (array) => {
  const dic = {};
  array.forEach((x) => {
    if (!dic[x]) dic[x] = 0;
    dic[x] += 1;
  });
  const max = Math.max(...Object.values(dic));
  let count = 0;
  for (const key in dic) {
    count += dic[key] === max ? 1 : 0;
  }
  if (count > 1) return -1;
  for (const key in dic) {
    if (dic[key] === max) return parseInt(key);
  }
};
