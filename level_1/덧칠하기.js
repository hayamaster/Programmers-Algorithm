function solution(n, m, section) {
  var answer = 0;
  while (section.length > 0) {
    answer++;
    let arrange = section[0] + m;
    while (arrange > section[0]) {
      section.shift();
      if (section.length == 0) break;
    }
  }
  return answer;
}
