class Player {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
    this.name = "Player";
    this.level = 1;
  }

  attack(enemy) {
    enemy.health -= this.strength;
  }
}

class Enemy {
  constructor(strength, health) {
    this.strength = strength;
    this.health = health;
    this.name = "Monster";
  }
  attack(enemy) {
    enemy.health -= this.strength;
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function log(message) {
  document.getElementById("log").innerHTML += message;
}

function updateHealth() {
  document.getElementById().innerHTML = character.health;
}

async function fight(p1, p2) {
  fight = true;

  while (fight === true) {
    p1.attack(p2);
    document.getElementById("enemyHealth").innerHTML = p2.health;
    log("<br />" + p1.name + " attacked " + p2.name);
    await sleep(1000);
    if (p2.health <= 0) {
      log("<br />" + p2.name + " died");
      break;
    }
    p2.attack(p1);
    document.getElementById("playerHealth").innerHTML = p1.health;
    await sleep(1000);
    if (p1.health <= 0) {
      break;
    }
  }
}

const hero = new Player(15, 100);
const enemy = new Enemy(10, 100);

fight(hero, enemy);
