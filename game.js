var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var ballX = ballRadius;
var ballY = canvas.height - ballRadius;

var treeRadius = 15;
var treeTrunkHeight = 15;
var treeTrunkWidth = 6;
var treeX = canvas.width / 2;
var treeY = canvas.height - treeTrunkHeight;

var treeAmount = 10;
var treeSpacing = 100;

var noCollision = true;

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function drawTree(x) {
  if (noCollision === true) {
    ctx.beginPath();
    ctx.arc(
      x + treeTrunkWidth / 2,
      treeY - treeRadius,
      treeRadius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#3aeb34";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(x, treeY, treeTrunkWidth, treeTrunkHeight);
    ctx.fillStyle = "#996633";
    ctx.fill();
    ctx.closePath();
  }
}

function drawTrees() {
  let treeInternX = 0;
  for (i = 0; i < treeAmount; i++) {
    treeInternX = treeSpacing * i;
    drawTree(treeInternX + treeX);
  }
}

function moveTree(movespeed) {
  treeX -= movespeed;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawTrees();
  moveTree(2);
  collisionDetection();
}

function collisionDetection() {
  if (treeX - treeRadius < ballX + ballRadius) {
    noCollision = false;
  }
}

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

//fight(hero, enemy);
var interval = setInterval(draw, 20);
