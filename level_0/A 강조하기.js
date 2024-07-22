const solution = (myString) =>
  myString
    .split("")
    .map((char) =>
      char === "a" || char === "A" ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
