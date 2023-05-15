function solution(n, k) {
  const array = [...Array(n).keys()].map((val) => ++val);
  const result = [];
  const getNum = (arr) => {
    const idx = Math.ceil(k / factorial(arr.length - 1)) - 1;
    k -= idx * factorial(arr.length - 1);
    return arr[idx];
  };
  for (let i = 1; i <= n; i++) {
    const num = getNum(array);
    array.splice(array.indexOf(num), 1);
    result.push(num);
  }
  return result;
}

const factorial = (num) => {
  if (num == 1 || num == 0) return 1;
  return num * factorial(num - 1);
};
