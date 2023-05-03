function solution(n, words) {
  let stack = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const previous = words[i - 1];
    const current = words[i];
    if (
      previous[previous.length - 1] != current[0] ||
      stack.indexOf(current) != -1
    )
      return [(i + 1) % n == 0 ? n : (i + 1) % n, Math.ceil((i + 1) / n)];
    stack.push(words[i]);
  }
  return [0, 0];
}
