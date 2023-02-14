const recursive = (target, today, index) => {
  if (index == 3) return -1;
  if (target[index] > today[index]) return -1;
  else if (target[index] < today[index]) return index;
  else if (target[index] == today[index] && index == 2) return index;
  else if (target[index] == today[index])
    return recursive(target, today, index + 1);
};

function solution(today, terms, privacies) {
  var answer = [];
  today = today.split(".").map((x) => parseInt(x));
  for (let i = 0; i < privacies.length; i++) {
    privacies[i] = privacies[i].split(".").join(" ").split(" ");
    for (let j = 0; j < terms.length; j++) {
      let imsy = terms[j].split(" ");
      if (privacies[i][3] == imsy[0]) {
        privacies[i][3] = imsy[1];
        break;
      }
    }
    privacies[i] = privacies[i].map((x) => parseInt(x));
    privacies[i][1] += privacies[i][3];
    privacies[i] = privacies[i].slice(0, 3);
    while (privacies[i][1] > 12) {
      privacies[i][0]++;
      privacies[i][1] -= 12;
    }
    if (recursive(privacies[i], today, 0) == -1) continue;
    else answer.push(i + 1);
  }
  return answer;
}
