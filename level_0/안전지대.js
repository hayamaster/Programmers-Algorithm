const solution = (board) => {
  let result = 0;
  const arr = [];
  let idx1 = -1;
  // 크기 확장한 배열 만들기
  for (let i = 0; i < board.length + 2; i++) {
    const tempArr = [];
    let idx2 = -1;
    for (let j = 0; j < board[0].length + 2; j++) {
      0 <= idx1 &&
      idx1 < board.length &&
      0 <= idx2 &&
      idx2 < board[0].length &&
      board[idx1][idx2] === 1
        ? tempArr.push(1)
        : tempArr.push(0);
      idx2 += 1;
    }
    idx1 += 1;
    arr.push(tempArr);
  }

  // 위험지역 맵핑
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] === 1) {
        if (arr[i][j + 1] === 0) arr[i][j + 1] = 2;
        if (arr[i][j - 1] === 0) arr[i][j - 1] = 2;
        if (arr[i + 1][j] === 0) arr[i + 1][j] = 2;
        if (arr[i - 1][j] === 0) arr[i - 1][j] = 2;
        if (arr[i - 1][j + 1] === 0) arr[i - 1][j + 1] = 2;
        if (arr[i - 1][j - 1] === 0) arr[i - 1][j - 1] = 2;
        if (arr[i + 1][j + 1] === 0) arr[i + 1][j + 1] = 2;
        if (arr[i + 1][j - 1] === 0) arr[i + 1][j - 1] = 2;
      }
    }
  }

  // 안전한 지역 개수 세기
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      if (arr[i][j] === 0) result++;
    }
  }
  return result;
};
