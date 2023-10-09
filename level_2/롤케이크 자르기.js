// 힌트 참고
// 한쪽으로 전체 토핑을 주고, 하나씩 넘겨주며 비교하기

const solution = (topping) => {
  const myArr = new Array(10001).fill(0);
  const brotherArr = new Array(10001).fill(0);
  let myTopping = 0;
  let brotherTopping = 0;
  let answer = 0;

  topping.forEach((el) => myArr[el]++);
  myTopping = myArr.filter((num) => num !== 0).length;

  topping.forEach((el) => {
    brotherArr[el]++;
    if (brotherArr[el] === 1) brotherTopping++;

    myArr[el]--;
    if (myArr[el] === 0) myTopping--;

    if (brotherTopping === myTopping) answer++;
  });

  return answer;
};
