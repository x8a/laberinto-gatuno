class Shrimp {
    constructor(canvas, x, y) {
      this.size = 20;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = x;
      this.y = y;
      loadImg = function() {
        this.img = new Image();
        this.img.src = "img/shrimp.png";
        this.img.onload = () => {
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
      }
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Yarn {
    constructor(canvas, x, y) {
      this.size = 20;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.x = x;
      this.y = y;
      loadImg = function() {
        this.img = new Image();
        this.img.src = "img/yarn-ball.png";
        this.img.onload = () => {
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
      }
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Sock {
    constructor(canvas, x, y) {
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
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
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
}