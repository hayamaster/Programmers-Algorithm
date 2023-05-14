function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const str = s.slice(i, s.length) + s.slice(0, i);
    if (isCorrectBrace(str)) count++;
  }
  return count;
}

const isCorrectBrace = (s) => {
  let stack = [];
  let top = -1;
  for (let i = 0; i < s.length; i++) {
    if (top == -1) {
      stack[++top] = s[i];
      continue;
    }
    if (
      (stack[top] == "[" && s[i] == "]") ||
      (stack[top] == "(" && s[i] == ")") ||
      (stack[top] == "{" && s[i] == "}")
    )
      top--;
    else stack[++top] = s[i];
  }
  return top == -1 ? true : false;
};
