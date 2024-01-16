const solution = (bandage, health, attacks) => {
  let currentTime = 1;
  let dead = false;
  let myHealth = health;

  attacks.forEach((attack) => {
    const [attackTime, damage] = attack;
    const [시전시간, 초당회복량, 추가회복량] = bandage;
    let 기술시전시간 = 1;

    while (currentTime !== attackTime) {
      if (기술시전시간 === 시전시간) {
        myHealth = myHealth + 추가회복량 + 초당회복량;
        기술시전시간 = 0;
      } else {
        myHealth = myHealth + 초당회복량;
      }
      if (myHealth > health) myHealth = health;
      기술시전시간++;
      currentTime++;
    }

    myHealth -= damage;
    currentTime++;
    if (myHealth <= 0) dead = true;
  });

  return dead ? -1 : myHealth;
};
