const solution = (lines) => {
  const dic = {};
  let answer = 0;
  lines.forEach((line) => {
    const [start, end] = line;
    for (let i = start; i < end; i++) {
      if (!dic[i]) dic[i] = 0;
      dic[i]++;
    }
  });
  for (const num in dic) {
    if (dic[num] > 1) answer++;
  }
  return answer;
};
