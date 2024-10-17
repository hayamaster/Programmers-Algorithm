const toSec = (time) => {
  const [min, sec] = time.split(":").map((num) => parseInt(num));

  return min * 60 + sec;
};

const checkCurPos = (curPos, opStart, opEnd, endTime) => {
  if (curPos < 0) {
    curPos = 0;
  } else if (curPos > endTime) {
    curPos = endTime;
  }
  if (opStart <= curPos && curPos < opEnd) {
    curPos = opEnd;
  }

  return curPos;
};

const solution = (video_len, pos, op_start, op_end, commands) => {
  const opStart = toSec(op_start);
  const opEnd = toSec(op_end);
  const endTime = toSec(video_len);
  let curPos = toSec(pos);

  commands.forEach((command) => {
    curPos = checkCurPos(curPos, opStart, opEnd, endTime);
    curPos += command === "next" ? 10 : -10;
  });

  curPos = checkCurPos(curPos, opStart, opEnd, endTime);

  const min = Math.floor(curPos / 60)
    .toString()
    .padStart(2, "0");
  const sec = (curPos % 60).toString().padStart(2, "0");

  return [min, sec].join(":");
};
