function solution(arr) {
  var answer = Math.max(...arr);
  while (true) {
    if (isLCM(arr, answer)) break;
    answer++;
  }
  return answer;
}

const isLCM = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (num % arr[i] != 0) return false;
  }
  return true;
};
