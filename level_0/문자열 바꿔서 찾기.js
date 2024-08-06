const solution = (myString, pat) => {
  const changedString = myString
    .split("")
    .map((char) => {
      if (char === "A") return "B";
      if (char === "B") return "A";
      return char;
    })
    .join("");

  return changedString.includes(pat) ? 1 : 0;
};
