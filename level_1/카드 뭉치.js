function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < goal.length; i++) {
    if (cards1[idx1] == goal[i]) {
      idx1++;
      continue;
    } else if (cards2[idx2] == goal[i]) {
      idx2++;
      continue;
    }
    return "No";
  }
  return "Yes";
}
