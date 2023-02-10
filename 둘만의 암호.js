const solution = (s, skip, index) => {
  var answer = "";
  let ascii = 0;
  const len_skip = skip.length;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    for (let j = 0; j < index; j++) {
      if (char == "z") ascii = char.charCodeAt(0) - 25;
      else ascii = char.charCodeAt(0) + 1;
      char = String.fromCharCode(ascii);
      for (let k = 0; k < len_skip; k++) {
        if (char == skip[k]) {
          j--;
          break;
        }
      }
    }
    answer += char;
  }
  return answer;
};
