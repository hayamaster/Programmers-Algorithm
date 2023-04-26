function solution(s) {
  return s
    .split(" ")
    .map((x) => x.toLowerCase())
    .map((x) => {
      if (x != "") return x[0].toUpperCase() + x.substring(1);
      return "";
    })
    .join(" ");
}
