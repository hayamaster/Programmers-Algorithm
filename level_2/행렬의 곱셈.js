function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let imsy = [];
    for (let k = 0; k < arr2[0].length; k++) {
      let element = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        element += arr1[i][j] * arr2[j][k];
      }
      imsy.push(element);
    }
    answer.push(imsy);
  }
  return answer;
}
