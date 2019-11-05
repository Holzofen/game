var ballRadius = 10;
var ballX = ballRadius;
var ballY = canvas.height - ballRadius;

var obstacles = [];
for (i = 0; i < obstacleAmount; i++) {
  obstacles[i] = new Tree();
}

E1 = new EmptyObstacle();

function log(message) {
  document.getElementById("log").innerHTML += message;
}

function moveTreeIs(moving) {
  if (moving === true) {
    firstObstacleX += obstacleSpeed;
  }

}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function collisionDetection() {
  if (firstObstacleX + obstacleCounter * obstacleSpacing < ballX + ballRadius) {
    obstacles[obstacleCounter].interact(P1);
    obstacles[obstacleCounter] = E1;
    obstacleCounter += 1;
  }
}

class Player {
  constructor() {
    this.name = "Player";
    this.wood = 0;
  }
  addWood(amount) {
    this.wood += amount;
    document.getElementById("playerWood").innerHTML = P1.wood;
  }

}

/*
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




/*

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

*/

P1 = new Player();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  for (i = 0; i < obstacleAmount; i++) {
    obstacles[i].draw(firstObstacleX + i * obstacleSpacing);
  }
  moveTreeIs(true);
  collisionDetection();
}


var interval = setInterval(draw, 40);
