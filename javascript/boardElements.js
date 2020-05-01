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
    this.speed = 30;
    this.size = 40;
  }
  loadImg() {
    this.img = new Image();
    this.img.src = "img/hero.png";
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}

class Box {
  constructor(canvas) {
    this.img = null;
    this.canvas = canvas;
    this.x = canvas.width - 50;
    this.y = canvas.height - 70;
    this.width = 50;
    this.height = 40;
  }
  loadImg() {
    this.img = new Image();
    this.img.src = "img/box.png";
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Shrimp {
    constructor(x, y) {
      this.size = 40;
      this.x = x;
      this.y = y;
    }
    loadImg() {
      this.img = new Image();
      this.img.src = "img/shrimp.png";
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    }  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}

class Yarn {
    constructor(x, y) {
      this.size = 40;
      this.x = x;
      this.y = y;
    }
    loadImg() {
      this.img = new Image();
      this.img.src = "img/yarn-ball.png";
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    }  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
    }
}

class Sock {
    constructor(x, y) {
        this.size = 40;
        this.x = x;
        this.y = y;
        loadImg = function() {
          this.img = new Image();
          this.img.src = "img/sock.png";
          this.img.onload = () => {
            ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
          }
        }
      }
    
      draw() {
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
}

let myCountdown;
let sec = 90;

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
  if(sec == 0) {
    clearInterval(myCountdown);
    document.querySelector("#timer").innerHTML = `TIME'S UP!`;
  }
}

