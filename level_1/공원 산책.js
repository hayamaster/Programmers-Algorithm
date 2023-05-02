function solution(park, routes) {
  let curRow, curCol;
  for (let i = 0; i < park.length; i++) {
    if (park[i].indexOf("S") != -1) {
      curCol = park[i].indexOf("S");
      curRow = i;
      break;
    }
  }
  for (let i = 0; i < routes.length; i++) {
    let dir = routes[i][0]; // 이동 방향
    let len = routes[i][2]; // 이동 거리
    let checkX = false;
    // 동쪽, 남쪽이면 + 방향, 서쪽, 북쪽이면 - 방향
    len *= dir == "E" || dir == "S" ? 1 : -1;

    // 범위가 공원을 벗어나는지 확인
    if (dir == "E" || dir == "W") {
      if (curCol + len < 0 || curCol + len >= park[curRow].length) continue;
      if (dir == "E") {
        for (let j = curCol + 1; j <= curCol + len; j++) {
          if (park[curRow][j] == "X") {
            checkX = true;
            break;
          }
        }
      } else {
        for (let j = curCol - 1; j >= curCol + len; j--) {
          if (park[curRow][j] == "X") {
            checkX = true;
            break;
          }
        }
      }
      if (checkX == false) curCol += len;
    } else {
      if (curRow + len < 0 || curRow + len >= park.length) continue;
      if (dir == "S") {
        for (let j = curRow + 1; j <= curRow + len; j++) {
          if (park[j][curCol] == "X") {
            checkX = true;
            break;
          }
        }
      } else {
        for (let j = curRow - 1; j >= curRow + len; j--) {
          if (park[j][curCol] == "X") {
            checkX = true;
            break;
          }
        }
      }
      if (checkX == false) curRow += len;
    }
  }
  return [curRow, curCol];
}
