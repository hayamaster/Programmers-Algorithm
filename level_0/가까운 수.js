const solution = (array, n) => {
  const arr = [...array, n].sort((a, b) => a - b);
  const findIdx = arr.findIndex((num) => num === n);
  let compare1 = 100;
  let compare2 = 100;
  if (arr[findIdx - 1]) compare1 = arr[findIdx] - arr[findIdx - 1];
  if (arr[findIdx + 1]) compare2 = arr[findIdx + 1] - arr[findIdx];

  return compare1 <= compare2 ? arr[findIdx - 1] : arr[findIdx + 1];
};
