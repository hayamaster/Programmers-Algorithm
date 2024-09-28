const solution = (arr, intervals) =>
  intervals.map(([start, end]) => arr.slice(start, end + 1)).flat();
