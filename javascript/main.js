function landingPage() {
    document.querySelector("body").innerHTML = `
    <div>
        <div class="game-intro">
            <img src="./img/hero.png" class="hero"/>
            <h1 class="main-title">LABERINTO GATUNO</h1>
            <p class="p-left">HURRY UP AND GET TO THE BOX TO SLEEP!</p>
            <div class="center">
                <button id="start-btn" class="btn btn-lg">START</button>
            </div>
            <ul class="list">
                <li>
                    <div class="card border-0" style="width:250px;">
                        <div class="card-body">
                            <ul class="ver-list">
                                <li><img src="./img/arrowKeys.png" alt="Arrow Keys" class="arrow-keys"/></li>
                                <li><p class="card-text">MOVE WITH THE ARROW KEYS</p></li>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card border-0" style="width: 250px;">
                        <div class="card-body">
                            <ul class="hor-list">
                                <li><img src="./img/shrimp.png" class="icon"/>  + 10 SECONDS</li>
                                <li><img src="./img/yarn-ball.png" class="icon"/> - 10 SECONDS</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>        
    </div>
    `;

    document.getElementById('start-btn').onclick = () => {
        gameScreen();
      };
}

function gameScreen() {
    document.querySelector("body").innerHTML = `
    <div class="game-board">
        <audio autoplay loop id="volume">
            <source src="./audio/song.mp3" type="audio/mpeg">
        </audio>
        <div id="timer" class="btn btn-lg bg-danger text-white justify-content center">
            TIME LEFT 00:45
        </div>
        <div>
            <canvas id="canvas" width="570" height="570"></canvas>
        </div>
    <div>
    `;
    document.getElementById("volume").volume = 0.1;
    const mainCanvas = document.querySelector('canvas');
    const myGame = new Game(mainCanvas);
    sec = 45;
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
    <div class="game-board">
        <audio autoplay loop id="volume">
            <source src="./audio/purr.wav" type="audio/wav">
        </audio>
        <img class="shadow" src="./img/boxNap.gif" alt="Cat in a box">
        <h1 class="h1-center">CONGRATULATIONS!</h1>
        <h2 class="h1-center">TIME TO SLEEP</h2>
        <br>
        <button id="start-btn" class="btn btn-lg">RESTART</button>
    </div>
    `;
    document.getElementById("volume").volume = 0.3;
    document.getElementById('start-btn').onclick = () => {
        landingPage();
      };
}

function gameOverScreen() {
    document.querySelector("body").innerHTML = `
    <div class="game-board">
        <audio autoplay loop id="volume">
            <source src="./audio/piano.mp3" type="audio/mpeg">
        </audio>
        <img src="./img/salem.gif" alt="Salem smashing the piano">
        <h1 class="h1-center">SORRY!</h1>
        <h2 class="h1-center">TIME'S UP</h2>
        <br>
        <button id="start-btn" class="btn btn-lg">RESTART</button>
    </div>
    `;
    document.getElementById("volume").volume = 0.1;
    document.getElementById('start-btn').onclick = () => {
        landingPage();
      };
}

window.onload = () => { landingPage() }