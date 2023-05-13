function solution(n, a, b) {
  var answer = 1;
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  while (!(a - b == -1 && a % 2 == 1 && b % 2 == 0)) {
    answer++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return answer;
}
