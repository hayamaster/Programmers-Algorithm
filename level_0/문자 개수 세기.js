const solution = (my_string) => {
  const upper = Array(26).fill(0);
  const lower = Array(26).fill(0);

  my_string.split("").forEach((char) => {
    if (char.charCodeAt() < 97) {
      upper[char.charCodeAt() - 65]++;
    } else {
      lower[char.charCodeAt() - 97]++;
    }
  });

  return upper.concat(lower);
};
