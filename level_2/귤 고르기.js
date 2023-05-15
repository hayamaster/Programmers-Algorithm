function solution(k, tangerine) {
  var answer = 0;
  let dic = {};
  let arr = [];
  tangerine.forEach((x) => {
    dic[x] = (dic[x] || 0) + 1;
  });
  for (let size in dic) {
    arr.push([size, dic[size]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  let acc = 0;
  while (acc < k) {
    acc += arr[answer][1];
    answer++;
  }
  return answer;
}
