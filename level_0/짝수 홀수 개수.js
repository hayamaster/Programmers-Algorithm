const solution = (num_list) => [
  num_list.filter((even) => even % 2 === 0).length,
  num_list.filter((odd) => odd % 2 === 1).length,
];
