function landingPage() {
    document.querySelector("body").innerHTML = `
    <div class="game-intro">
        <div>
            <h1>LABERINTO GATUNO</h1>
            <p>Our tired cat needs your help to get to the box. Only then can she find the rest she truly deserves.</p>
            <ul class="list">
            <li><img src="./img/shrimp.png" class="icon"/> --> Get 10 extra seconds</li>
            <li><img src="./img/yarn-ball.png" class="icon"/> --> Lose 10 seconds</li>
            </ul>
        </div>
        <div>
            <img src="./img/arrowKeys.png" alt="Arrow Keys" class="arrow-keys"/>
        </div>
        <div>
            <button id="start-btn" class="btn bg-dark text-white btn-lg">START</button>
        </div>
    </div>
    `;

    document.getElementById('start-btn').onclick = () => {
        gameScreen();
      };
}

function gameScreen() {
    document.querySelector("body").innerHTML = `
    <div id="timer" class="btn btn-lg bg-danger text-white justify-content center">
        TIME LEFT 00:30
    </div>
    <div>
        <canvas id="canvas" width="570" height="570"></canvas>
    </div>
    `;
    const mainCanvas = document.querySelector('canvas');
    const myGame = new Game(mainCanvas);
    sec = 30;
    myGame.startGame();
    
    function pressKey(event) {
        if(event.code == "ArrowRight" && myGame.cat.checkCollision("right")) {
            myGame.cat.x += myGame.cat.speed;
        }
        if(event.code == "ArrowLeft" && myGame.cat.checkCollision("left")) {
            myGame.cat.x -= myGame.cat.speed;
        }
        if(event.code == "ArrowUp" && myGame.cat.checkCollision("up")) {
            myGame.cat.y -= myGame.cat.speed;
        }
        if(event.code == "ArrowDown" && myGame.cat.checkCollision("down")) {
            myGame.cat.y += myGame.cat.speed;
        }
    
        if(myGame.cat.x >= myGame.canvas.width - 40) {
            myGame.cat.x = myGame.canvas.width - 40;
        } else if (myGame.cat.x <= 0) {
            myGame.cat.x = 0;
        }
        if (myGame.cat.y <= 0) {
            myGame.cat.y = 0;
        } else if(myGame.cat.y >= myGame.canvas.height - 40) {
            myGame.cat.y = myGame.canvas.height - 40;
        }
        myGame.updateCanvas();

        function extraTime(array) {
            for(let i = array.length - 1; i >= 0; i--) {
              if(array[i].x === myGame.cat.x && array[i].y === myGame.cat.y) {
                  array.splice(i, 1);
                  sec += 11;
              }
            }
          }
          
          function wasteTime(array) {
            for(let i = array.length - 1; i >= 0; i--) {
              if(array[i].x === myGame.cat.x && array[i].y === myGame.cat.y) {
                  array.splice(i, 1);
                  if(sec >= 10) {
                    sec = sec - 9;
                  } else if (sec <= 10) {
                      sec = 0;
                      clearInterval(myCountdown);
                      gameOverScreen();
                  }                  
              }
            }
          }

        extraTime(myGame.myShrimps);
        wasteTime(myGame.yarnBalls);

        if(myGame.winner()) {
            clearInterval(myCountdown);
            winnerScreen();      
          }
    }   

    document.onkeydown = pressKey; 
}

function winnerScreen() {
    document.querySelector("body").innerHTML = `
    <div class="game-intro">
        <h1>WINNER</h1>
        <img src="./img/boxNap.gif" alt="Cat in a box">
        <br>
        <br>
        <button id="start-btn" class="btn bg-dark text-white btn-lg">RESTART</button>
    </div>
    `;
    document.getElementById('start-btn').onclick = () => {
        landingPage();
      };
}

function gameOverScreen() {
    document.querySelector("body").innerHTML = `
    <div class="game-intro">
        <h1 class="over">TIME'S UP</h1>
        <img src="./img/salem.gif" alt="Salem smashing the piano">
        <br>
        <br>
        <button id="start-btn" class="btn bg-dark text-white btn-lg">RESTART</button>
    </div>
    `;
    document.getElementById('start-btn').onclick = () => {
        landingPage();
      };
}

window.onload = () => { landingPage() }