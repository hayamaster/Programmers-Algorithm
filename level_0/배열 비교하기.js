const solution = (arr1, arr2) => {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    const diff =
      arr1.reduce((acc, cur) => (acc += cur), 0) -
      arr2.reduce((acc, cur) => (acc += cur), 0);
    if (diff > 0) {
      return 1;
    } else if (diff < 0) {
      return -1;
    } else {
      return 0;
    }
  }
};
