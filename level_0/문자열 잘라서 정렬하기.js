const solution = (myString) =>
  myString
    .split(/x+/)
    .filter((char) => char !== "")
    .sort();
