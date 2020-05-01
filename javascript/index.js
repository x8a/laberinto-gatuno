"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const gameIntro = document.querySelector(".game-intro");
const myTimerDiv = `<div id="timer" class="btn btn-lg bg-danger text-white justify-content-center">TIME LEFT</div>`;
let cat = new Cat();
let box = new Box(canvas);

//Obstacles
let shrimp = new Shrimp(450, 30);
let yarn = new Yarn(90, 270);

function startGame() {
  gameIntro.innerHTML = myTimerDiv;
  myCountdown = setInterval(counting, 1000);

  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30);    

  cat.loadImg(); 
  box.loadImg();
  shrimp.loadImg();
  yarn.loadImg();
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30); 

  cat.draw(); 
  box.draw();
  shrimp.draw();
  yarn.draw();
}

function pressKey(event) {

  function checkCollision(direction) {
    let position;
    
    if(direction == "right") {
      position = labyrinth[cat.y / cat.speed][(cat.x + 30) / cat.speed];
    } else if(direction == "left") {
      position = labyrinth[cat.y / cat.speed][(cat.x - 30) / cat.speed];
    } else if(direction == "up") {
      position = labyrinth[(cat.y - 30) / cat.speed][cat.x / cat.speed];
    } else if(direction == "down") {
      position = labyrinth[(cat.y + 30) / cat.speed][cat.x / cat.speed];
    }

    return position;
  }

    if(event.code == "ArrowRight" && checkCollision("right")) {
      cat.x += cat.speed;
    }
    if(event.code == "ArrowLeft" && checkCollision("left")) {
      cat.x -= cat.speed;
    }
    if(event.code == "ArrowUp" && checkCollision("up")) {
        cat.y -= cat.speed;
    }
    if(event.code == "ArrowDown" && checkCollision("down")) {
        cat.y += cat.speed;
    }

    if(cat.x >= canvas.width - 40) {
      cat.x = canvas.width - 40;
    } else if (cat.x <= 0) {
      cat.x = 0;
    }
    if (cat.y <= 0) {
      cat.y = 0;
    } else if(cat.y >= canvas.height - 40) {
      cat.y = canvas.height - 40;
    }

    updateCanvas();

    if(gameOver) {
      console.log("You're a winner baby");
    }
}

function gameOver() {
  return cat.x === box.x && cat.y === box.y;
}

window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        canvas.style.visibility = "visible";
        startGame();
    };
}

document.onkeydown = pressKey; 