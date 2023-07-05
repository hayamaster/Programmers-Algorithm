const solution = (s) => {
  let answer = [];
  const dic = {};
  s.split("").forEach((char) => {
    char in dic ? dic[char]++ : (dic[char] = 1);
  });
  for (const key in dic) {
    if (dic[key] === 1) answer.push(key);
  }
  return answer.sort().join("");
};
