const solution = (storey) => {
  let answer = 0;
  const digit = 10;

  while (storey > 0) {
    const mod = storey % digit;

    if ((mod === 5 && (storey / 10) % digit > 5) || mod > 5) {
      storey += 10 - mod;
      answer += 10 - mod;
    } else {
      storey -= mod;
      answer += mod;
    }

    storey /= 10;
  }

  return answer;
};
