const solution = (str_list) => {
  if (!str_list.includes("r") && !str_list.includes("l")) return [];
  if (str_list.indexOf("r") === -1) {
    return str_list.slice(0, str_list.indexOf("l"));
  }
  if (str_list.indexOf("l") === -1) {
    return str_list.slice(str_list.indexOf("r") + 1);
  }
  if (str_list.indexOf("l") < str_list.indexOf("r")) {
    return str_list.slice(0, str_list.indexOf("l"));
  } else {
    return str_list.slice(str_list.indexOf("r") + 1);
  }
};
