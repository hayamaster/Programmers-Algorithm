function solution(name, yearning, photo) {
  var answer = [];
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const idx = name.indexOf(photo[i][j]);
      score += idx == -1 ? 0 : yearning[idx];
    }
    answer.push(score);
  }
  return answer;
}
