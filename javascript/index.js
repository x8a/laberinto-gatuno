function startGame() {
  gameIntro.innerHTML = myTimerDiv;
  myCountdown = setInterval(counting, 1000);

  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30);    

  cat.loadImg(); 
  box.loadImg();
  myShrimps.map(i => i.loadImg());
  yarnBalls.map(i => i.loadImg());
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30); 

  cat.draw(); 
  box.draw();
  myShrimps.map(i => i.draw());
  yarnBalls.map(i => i.draw());
}

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

function pressKey(event) {

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

    extraTime(myShrimps);
    wasteTime(yarnBalls);

    if(winner()) {
      clearInterval(myCountdown);
      main.innerHTML = 
      `
      <div class="game-intro">
        <h1>WINNER</h1>
        <img src="./img/boxNap.gif" alt="Cat in a box">
        <br>
        <br>
        <button id="start-btn" class="btn bg-dark text-white btn-lg">RESTART</button>
      </div>
      `
    }
}

function winner() {
  return cat.x === box.x && cat.y === box.y;
}

function gameOver() {
  main.innerHTML = 
      `
      <div class="game-intro">
        <h1 class="over">TIME'S UP</h1>
        <img src="./img/salem.gif" alt="Salem smashing the piano">
        <br>
        <br>
        <button id="start-btn" class="btn bg-dark text-white btn-lg">RESTART</button>
      </div>
      `
}

document.getElementById('start-btn').onclick = () => {
  canvas.style.visibility = "visible";
  startGame();
};

document.onkeydown = pressKey; 