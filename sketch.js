let player
let gameOver = 0;
let score = 0;
let FPS = 10;
let food = {
  x: 0,
  y: 0,

  randomPOS: function () {
    console.log("hi")
    food.x = floor(random(0, (width / player.size) - 1)) * player.size
    food.y = floor(random(0, (height / player.size) - 1)) * player.size

  },
  draw: function () {
    fill(255, 0, 0)
    square(food.x, food.y, player.size)
  }
}


function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode == 65) {
    if (player.moveMode != "right") { player.moveMode = "left" }
  }
  if (keyCode === RIGHT_ARROW || keyCode == 68) {
    if (player.moveMode != "left") { player.moveMode = "right" }
  }
  if (keyCode === DOWN_ARROW || keyCode == 83) {
    if (player.moveMode != "up") { player.moveMode = "down" }
  }
  if (keyCode === UP_ARROW || keyCode == 87) {
    if (player.moveMode != "down") { player.moveMode = "up" }
  }
}


function setup() {
  player = new PlayerMaker();
  frameRate(FPS)
  createCanvas(400, 400);
  background(50);
  food.randomPOS();

}

function draw() {

  background(50)


  player.draw()
  player.move();
  food.draw();
  collision()
  if (gameOver == 1) {
    GameOver();
  }
  fill(255)
  text(score, 50, 50)
  text(frameCount % FPS, 250, 250)
}
