const solution = (arr, delete_list) =>
  arr.filter((num) => !delete_list.includes(num));
