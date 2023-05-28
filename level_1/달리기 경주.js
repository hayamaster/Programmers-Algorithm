function solution(players, callings) {
  let map = new Map();
  players.forEach((val, idx) => map.set(val, idx));
  for (let i = 0; i < callings.length; i++) {
    const calledIndex = map.get(callings[i]);
    const temp = players[calledIndex - 1];
    map.set(temp, calledIndex);
    map.set(callings[i], calledIndex - 1);
    players[calledIndex - 1] = players[calledIndex];
    players[calledIndex] = temp;
  }
  return players;
}
