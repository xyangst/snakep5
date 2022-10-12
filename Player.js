
class PlayerMaker {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.length = 0,
            this.size = 5,
            this.moveMode = "down"
        this.move = function () {
            if (this.moveMode == "left") { this.x -= this.size }
            if (this.moveMode == "up") { this.y -= this.size }
            if (this.moveMode == "right") { this.x += this.size }
            if (this.moveMode == "down") { this.y += this.size }

        };
        this.draw = function () {
            fill(255)
            square(this.x, this.y, this.size)
            while (tail.length <= this.length) {
                tail[tail.length] = new createTail(this.x, this.y)
            }
            tail[0].x = this.x
            tail[0].y = this.y
            for (let i = tail.length - 1; i > 0; i--) {
                tail[i].x = tail[i - 1].x
                tail[i].y = tail[i - 1].y

                square(tail[i].x, tail[i].y, this.size)
                colorMode(HSL)
                let hue = map(floor(i), 0, tail.length, 0, 360)
                let clr = [hue , 100, 50]
                fill(clr)
                colorMode(RGB)
                console.log(clr)
            }
            tail.splice(tail.length - 1, 1)
        }
    }
}
let tail = [
]
class createTail {
    constructor(x, y) {
        this.x = x;
        this.y = y

    }
}
function collision() {
    if (player.x > width || player.x < 0 || player.y > height || player.y < 0) {
        gameOver = 1
    }
    for (let i = 2; i < player.length - 1; i++) {
        if (dist(player.x, player.y, tail[i].x, tail[i].y) == 0) {
            gameOver = 1;
        }
    }
    if (dist(player.x, player.y, food.x, food.y) == 0) {
        player.length += 10
        food.randomPOS();
    }
    score = player.length / 10
    console.log(score)



}
function GameOver(score) {
    player.length == 1
    tail = [];
    player = new PlayerMaker();
    
    gameOver = 0;
}