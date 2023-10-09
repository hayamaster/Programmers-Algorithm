const solution = (want, number, discount) => {
  let answer = 0;

  for (let i = 0; i <= discount.length - want.length; i++) {
    const wantList = new Map();
    want.forEach((fruit, idx) => wantList.set(fruit, number[idx]));

    for (let j = i; j < i + 10; j++) {
      const wantFruitCnt = wantList.get(discount[j]);
      if (wantFruitCnt && wantFruitCnt > 0)
        wantList.set(discount[j], wantFruitCnt - 1);
      else break;
    }

    const values = Array.from(wantList.values());

    if (!values.reduce((acc, cur) => acc + cur, 0)) answer++;
  }

  return answer;
};
