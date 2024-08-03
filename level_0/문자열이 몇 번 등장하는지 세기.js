const solution = (myString, pat) => {
  let answer = 0;

  while (myString !== "") {
    if (myString.slice(0, pat.length) === pat) answer++;

    myString = myString.slice(1);
  }

  return answer;
};
