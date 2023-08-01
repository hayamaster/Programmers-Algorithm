const solution = (fees, records) => {
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  let map = new Map();
  let dic = {};
  let answer = [];

  records.forEach((info) => {
    const [time, carNum, InAndOut] = info.split(" ");
    if (InAndOut == "IN") {
      map.set(carNum, changeTimes(time));
    } else {
      if (!dic[carNum]) {
        dic[carNum] = changeTimes(time) - map.get(carNum);
      } else {
        dic[carNum] += changeTimes(time) - map.get(carNum);
      }
      map.delete(carNum);
    }
  });

  for (const [carNum, time] of map.entries()) {
    if (!dic[carNum]) {
      dic[carNum] = 24 * 60 - 1 - time;
    } else {
      dic[carNum] += 24 * 60 - 1 - time;
    }
  }

  let arr = Object.keys(dic).sort((a, b) => a - b);
  arr = arr.map((key) => dic[key]);
  for (const time of arr) {
    answer.push(
      baseFee +
        (time > baseTime
          ? Math.ceil((time - baseTime) / unitTime) * unitFee
          : 0)
    );
  }
  return answer;
};

const changeTimes = (time) => {
  const [hour, min] = time.split(":");
  return parseInt(hour) * 60 + parseInt(min);
};
