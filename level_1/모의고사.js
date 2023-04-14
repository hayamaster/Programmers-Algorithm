function solution(answers) {
  let answer = [];
  let temp = [0, 0, 0];
  const num1 = [1, 2, 3, 4, 5];
  const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == num1[i % 5]) temp[0]++;
    if (answers[i] == num2[i % 8]) temp[1]++;
    if (answers[i] == num3[i % 10]) temp[2]++;
  }
  const max = Math.max(temp[0], temp[1], temp[2]);
  for (let i = 0; i < 3; i++) if (max == temp[i]) answer.push(i + 1);
  return answer;
}
