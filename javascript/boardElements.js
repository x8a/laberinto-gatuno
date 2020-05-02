const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
    this.x = 510;
    this.y = 510;
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

let gameIntro = document.querySelector(".game-intro");
let main = document.querySelector("main");
let myTimerDiv = 
`<div id="timer" class="btn btn-lg bg-danger text-white justify-content center">TIME LEFT 00:30</div>`;
let cat = new Cat();
let box = new Box(canvas);

//Obstacles
let myShrimps = [];
let yarnBalls = [];

let shrimp = new Shrimp(450, 30);
let shrimp2 = new Shrimp(30, 510);

let yarn = new Yarn(90, 300);
let yarn2 = new Yarn(300, 390);

myShrimps.push(shrimp);
myShrimps.push(shrimp2);

yarnBalls.push(yarn);
yarnBalls.push(yarn2);

function extraTime(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i].x === cat.x && array[i].y === cat.y) {
        array.splice(i, 1);
        sec += 6;
    }
  }
}

function wasteTime(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    if(array[i].x === cat.x && array[i].y === cat.y) {
        array.splice(i, 1);
        sec = sec - 4;
    }
  }
}

// Countdown
let myCountdown;
let sec = 30;

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
    gameOver();
  }
}

