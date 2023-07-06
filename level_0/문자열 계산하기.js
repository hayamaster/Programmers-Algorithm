const solution = (my_string) => {
  const arr = my_string.split(" ");
  let answer = parseInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const num = parseInt(arr[i + 1]);
    answer += arr[i] === "+" ? num : -num;
    i++;
  }
  return answer;
};
