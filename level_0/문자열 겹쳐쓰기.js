const solution = (my_string, overwrite_string, s) => {
  const arr = my_string.split("");

  return (
    arr.slice(0, s).join("") +
    overwrite_string +
    arr.slice(overwrite_string.length + s, arr.length).join("")
  );
};
