const solution = (id_pw, db) => {
  let message = "";
  db.forEach((arr) => {
    if (arr[0] === id_pw[0] && arr[1] === id_pw[1]) message = "login";
    else if (arr[0] !== id_pw[0] && message !== "wrong pw") message = "fail";
    else if (arr[1] !== id_pw[1]) message = "wrong pw";
  });
  return message;
};
