const solution = (cacheSize, cities) => {
  const arr = [];
  let executionTime = 0;

  if (cacheSize === 0) return cities.length * 5;

  cities.forEach((city) => {
    city = city.toUpperCase();

    const idx = arr.findIndex((item) => item === city);

    if (idx === -1) {
      arr.push(city);
      if (arr.length > cacheSize) arr.shift();
      executionTime += 5;
    } else {
      arr.splice(idx, 1);
      arr.push(city);
      executionTime += 1;
    }
  });

  return executionTime;
};
