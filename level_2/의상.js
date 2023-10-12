const solution = (clothes) => {
  const hash = new Map();
  clothes.forEach((arr) => {
    const type = arr[1];
    hash.set(type, hash.has(type) ? hash.get(type) + 1 : 2);
  });

  return Array.from(hash.values()).reduce((acc, cur) => acc * cur, 1) - 1;
};
