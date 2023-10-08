// 힌트 확인
// 누적합, 투포인트 이용

const solution = (sequence, k) => {
  let answer = [];
  const acc = [0];
  let left = 0;
  let right = 0;
  let minSize = 1000000;

  sequence.forEach((num, i) => {
    acc.push(num + acc[i]);
  });

  while (right <= sequence.length) {
    const calculatedNum = acc[right] - acc[left];

    if (calculatedNum === k) {
      if (minSize > right - left - 1) {
        answer = [left, right - 1];
        minSize = right - left - 1;
      }
    }
    if (calculatedNum > k) left++;
    else right++;
  }

  return answer;
};
