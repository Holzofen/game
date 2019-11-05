var obstacleAmount = 10;
var obstacleSpacing = 100;
var obstacleSpeed = -2;
var obstacleCounter = 0;
var firstObstacleX = canvas.width / 2;


class Tree {
  constructor() {
    this.treeRadius = 15;
    this.treeTrunkHeight = 15;
    this.treeTrunkWidth = 6;
    this.treeX = canvas.width / 2;
    this.treeY = canvas.height - this.treeTrunkHeight;
  }

  draw(x) {
    ctx.beginPath();
    ctx.arc(
      this.treeRadius + x,
      this.treeY - this.treeRadius,
      this.treeRadius,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "#3aeb34";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.rect(x + this.treeRadius - this.treeTrunkWidth / 2, this.treeY, this.treeTrunkWidth, this.treeTrunkHeight);
    ctx.fillStyle = "#996633";
    ctx.fill();
    ctx.closePath();  
  }

  interact(player) {
    player.addWood(1);
  }

}

// empty obstacle replaces obstacle if collision is detected
class EmptyObstacle {
  draw(y) {
    
  }
}