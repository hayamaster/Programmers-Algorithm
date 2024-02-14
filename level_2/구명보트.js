const solution = (people, limit) => {
  const peopleArray = people.sort((a, b) => b - a);
  let count = 0;
  let startIndex = 0;

  while (startIndex < peopleArray.length) {
    if (peopleArray[startIndex] + peopleArray.at(-1) <= limit) {
      peopleArray.pop();
    }
    startIndex++;
    count++;
  }

  return count;
};
