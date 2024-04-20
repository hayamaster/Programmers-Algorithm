const solution = (todo_list, finished) =>
  todo_list.filter((todo, idx) => !finished[idx]);
