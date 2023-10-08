const solution = (s) => {
  const answer = [];
  const numsArr = s
    .split("},")
    .map((item) => item.replaceAll("{", "").replaceAll("}", ""))
    .sort((a, b) => a.length - b.length);

  let prev = [];
  numsArr.forEach((nums) => {
    arr = nums.split(",");
    const temp = arr.find((number) => !prev.includes(number));
    answer.push(parseInt(temp));
    prev.push(temp);
  });

  return answer;
};
