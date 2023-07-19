const solution = (before, after) => {
  before.split("").forEach((char) => (after = after.replace(char, "")));
  return after === "" ? 1 : 0;
};
