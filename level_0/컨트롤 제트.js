const solution = (s) => {
  let answer = 0;
  const arr = s.split(" ");
  arr.forEach((item, idx) => {
    answer += item === "Z" ? -parseInt(arr[idx - 1]) : parseInt(item);
  });
  return answer;
};
