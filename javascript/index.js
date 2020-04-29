const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cat = {
    img: null,
    x: 30,
    y: 0,
    speed: 30,
    size: 40,
    loadImg: function() {
      this.img = new Image();
      this.img.src = "img/hero.png";
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
      }
    }
  }

const box = {
    img: null,
    x: canvas.width - 50,
    y: canvas.height - 70,
    width: 50,
    height: 40,
    loadImg: function() {
      this.img = new Image();
      this.img.src = "img/box.png";
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
   }
}

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

function startGame() {
  document.getElementById("start-btn").style.visibility = "hidden";

  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30);    

  cat.loadImg();
  box.loadImg();    
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Closing gaps
  ctx.fillStyle = "#F7B500";
  ctx.fillRect(330, 240, 30, 30);
  ctx.fillRect(300, 510, 30, 30); 

  ctx.drawImage(cat.img, cat.x, cat.y, cat.size, cat.size);
  ctx.drawImage(box.img, box.x, box.y, box.width, box.height);
}

function pressKey(event) {
    if(event.code == "ArrowRight") {
      cat.x += cat.speed;
    }
    if(event.code == "ArrowLeft") {
      cat.x -= cat.speed;
    }
    if(event.code == "ArrowUp") {
        cat.y -= cat.speed;
    }
    if(event.code == "ArrowDown") {
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
}


window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        canvas.style.visibility = "visible";
        startGame();
    };
}

document.onkeydown = pressKey; 