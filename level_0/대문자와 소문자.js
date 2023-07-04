const solution = (my_string) => {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (96 < my_string.charCodeAt(i) && my_string.charCodeAt(i) < 123)
      answer += my_string[i].toUpperCase();
    else answer += my_string[i].toLowerCase();
  }
  return answer;
};
