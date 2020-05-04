let labyrinth = [
  //   0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  18
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],// 0
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],// 1
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],// 2
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0],// 3
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],// 4
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],// 5
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],// 6
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],// 7
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],// 8 
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],// 9
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],// 10
      [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],// 11
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],// 12 
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],// 13
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],// 14
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],// 15
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],// 16
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],// 17 --> BOX (18, 17)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 18
  ];

class Cat {
  constructor() {
    this.img = null;
    this.x = 30;
    this.y = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.speed = 30;
    this.size = 40;
    this.position;
  }
  loadImg() {
    this.img = new Image();
    this.img.src = "img/hero.png";
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
  checkCollision(direction) {
    
    if(direction == "right") {
      this.position = labyrinth[this.y / this.speed][(this.x + 30) / this.speed];
    } else if(direction == "left") {
      this.position = labyrinth[this.y / this.speed][(this.x - 30) / this.speed];
    } else if(direction == "up") {
      this.position = labyrinth[(this.y - 30) / this.speed][this.x / this.speed];
    } else if(direction == "down") {
      this.position = labyrinth[(this.y + 30) / this.speed][this.x / this.speed];
    }
    return this.position;  
  }
}

class Box {
  constructor() {
    this.img = null;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 510;
    this.y = 510;
    this.width = 50;
    this.height = 40;
  }
  loadImg() {
    this.img = new Image();
    this.img.src = "img/box.png";
    this.img.onload = () => {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Shrimp {
    constructor(x, y) {
      this.size = 40;
      this.x = x;
      this.y = y;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
    }
    loadImg() {
      this.img = new Image();
      this.img.src = "img/shrimp.png";
      this.img.onload = () => {
        this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    }  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}

class Yarn {
    constructor(x, y) {
      this.size = 40;
      this.x = x;
      this.y = y;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
    }
    loadImg() {
      this.img = new Image();
      this.img.src = "img/yarn-ball.png";
      this.img.onload = () => {
        this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    }  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}

// Countdown
let myCountdown;
let sec;

let counting = () => {
  let min = Math.floor(sec / 60).toLocaleString(undefined, {minimumIntegerDigits: 2});
  let mySec;
  sec--;

  if(sec >= 60) {
    mySec = sec - 60;
  } else if(sec <= 60) {
    mySec = sec;
  }
  
  document.querySelector("#timer").innerHTML = `TIME LEFT ${min}:${mySec.toLocaleString(undefined, {minimumIntegerDigits: 2})}`;

}

