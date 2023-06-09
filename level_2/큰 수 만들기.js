function solution(number, k) {
  const arr = number.split("").reverse();
  const stack = [];
  while (arr.length) {
    stack.push(arr.pop());
    while (k > 0 && stack[stack.length - 1] < arr[arr.length - 1]) {
      stack.pop();
      k--;
    }
  }

  if (k != 0) stack.splice(-k);

  return stack.join("");
}
