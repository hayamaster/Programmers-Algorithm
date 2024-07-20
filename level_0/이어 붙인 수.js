const solution = (num_list) => {
  let odd = "";
  let even = "";
  num_list.forEach((cur) => (cur % 2 === 0 ? (even += cur) : (odd += cur)));

  return parseInt(odd) + parseInt(even);
};
