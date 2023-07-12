const solution = (keyinput, board) => {
  let [x, y] = [0, 0];
  const maxWidth = (board[0] - 1) / 2;
  const maxHeight = (board[1] - 1) / 2;
  keyinput.forEach((cmd) => {
    if (cmd === "left") Math.abs(x - 1) > maxWidth ? x : x--;
    if (cmd === "right") Math.abs(x + 1) > maxWidth ? x : x++;
    if (cmd === "up") Math.abs(y + 1) > maxHeight ? y : y++;
    if (cmd === "down") Math.abs(y - 1) > maxHeight ? y : y--;
  });

  return [x, y];
};
