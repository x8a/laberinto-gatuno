const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const cat = {
    img: null,
    x: 0,
    y: 0,
    speed: 5,
    width: 50,
    height: 50,
    loadImg: function() {
      this.img = new Image();
      this.img.src = "img/hero.png";
      this.width = 50;
      this.height = 50;
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
  }

const box = {
    img: null,
    x: 0,
    y: 0,
    width: 50,
    height: 40,
    loadImg: function() {
      this.img = new Image();
      this.img.src = "img/box.png";
      this.width = 50;
      this.height = 40;
      this.img.onload = () => {
        ctx.drawImage(this.img, this.x + 740, this.y + 550, this.width, this.height);
      }
   }
}


function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cat.loadImg();
    box.loadImg();
    document.getElementById("start-btn").style.visibility = "hidden";
}

function updateCanvas() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cat.img, cat.x, cat.y, 50, 50);
    ctx.drawImage(box.img, 740, 550, 50, 40);
    ctx.restore();
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
    updateCanvas();
}


window.onload = () => {
    document.getElementById('start-btn').onclick = () => {
        canvas.style.visibility = "visible";
        startGame();
    };
}

document.onkeydown = pressKey; 