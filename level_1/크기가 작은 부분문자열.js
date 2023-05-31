function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const num = t.substring(i, p.length + i);
    answer += parseInt(num) <= parseInt(p) ? 1 : 0;
  }
  return answer;
}
