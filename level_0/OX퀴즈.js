const solution = (quiz) =>
  quiz.map((problem) => {
    const arr = problem.split(" ");
    const answer =
      arr[1] === "+"
        ? parseInt(arr[0]) + parseInt(arr[2])
        : parseInt(arr[0]) - parseInt(arr[2]);
    return answer === parseInt(arr[4]) ? "O" : "X";
  });
