const solution = (elements) => {
  const size = elements.length;
  const arr = [];

  for (let i = 1; i <= size; i++) {
    for (let start = 0; start < size; start++) {
      let sum = 0;
      for (let j = start; j < start + i; j++) {
        sum += elements[j % size];
      }
      arr.push(sum);
    }
  }

  // 중복 제거
  const set = new Set(arr);

  return set.size;
};
