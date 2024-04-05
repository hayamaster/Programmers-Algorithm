const solution = (num_list) => {
  let holsu = 0;
  let zzacsu = 0;

  num_list.forEach((num, idx) => {
    if (idx % 2 === 0) {
      zzacsu += num;
    } else {
      holsu += num;
    }
  });

  return holsu > zzacsu ? holsu : zzacsu;
};
