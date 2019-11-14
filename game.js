var ballRadius = 10;
var ballX = ballRadius;
var ballY = canvas.height - ballRadius;

var obstacles = [];
var obstacleCounter = 0;
var adventureIs = true;
var obstacleSpeed = -5;

class Player {
  constructor() {
    this.name = "Player";
    this.wood = 0;
    this.tools = { 1: true, 2: false };
    this.toolNames = ["axe", "pickaxe"];
  }
  //todo: ändern zu addResource(resourceId, amount)
  addWood(amount) {
    this.wood += amount;
    document.getElementById("playerWood").innerHTML = P1.wood;
  }
  hasTool(toolId) {
    if (this.tools[toolId] == true) {
      return true;
    } else {
      return false;
    }
  }
}

function moveObstacles(moving) {
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

function log(message) {
  document.getElementById("log").innerHTML += message;
}

function draw() {
  clearCanvas();
  if (obstacleCounter === 10) {
    clearInterval(interval);
    return false;
  }
  drawBall();
  drawObstacles();
  moveObstacles(true);
  collisionDetection();
}

function drawObstacles() {
  for (i = 0; i < obstacleAmount; i++) {
    obstacles[i].draw(firstObstacleX + i * obstacleSpacing);
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function resetValues() {
  obstacles = [];
  for (i = 0; i < obstacleAmount; i++) {
    obstacles[i] = new Tree();
  }
  obstacleCounter = 0;
  adventureIs = true;
  firstObstacleX = canvas.width / 2;
  obstacleSpeed = -5;
}

P1 = new Player();
E1 = new EmptyObstacle();

function startAdventure() {
  resetValues();
  interval = setInterval(draw, 20);
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
