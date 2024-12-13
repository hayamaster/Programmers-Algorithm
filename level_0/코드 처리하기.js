const solution = (code) => {
  let answer = "";
  let mode = false;

  code.split("").forEach((char, idx) => {
    if (char === "1") {
      mode = !mode;

      return;
    }

    if (mode && idx % 2 === 1) {
      answer += char;
    }
    if (!mode && idx % 2 === 0) {
      answer += char;
    }
  });

  return answer || "EMPTY";
};
