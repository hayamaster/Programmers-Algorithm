const solution = (rsp) =>
  rsp
    .split("")
    .map((res) => (res == "2" ? "0" : res === "0" ? "5" : "2"))
    .join("");
