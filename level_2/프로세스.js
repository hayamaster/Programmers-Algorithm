function solution(priorities, location) {
  var answer = 0;
  while (!(location == 0 && priorities[location] >= Math.max(...priorities))) {
    const temp = priorities.shift();
    if (temp >= Math.max(...priorities)) {
      location--;
      answer++;
      continue;
    }
    if (location == 0) location = priorities.length;
    else location--;
    priorities.push(temp);
  }
  return ++answer;
}
