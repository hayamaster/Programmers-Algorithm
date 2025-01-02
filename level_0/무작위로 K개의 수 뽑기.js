const solution = (arr, k) => {
  const setArr = Array.from(new Set(arr));

  while (setArr.length !== k) {
    setArr.length > k ? setArr.pop() : setArr.push(-1);
  }

  return setArr;
};
