class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.cat;
    this.box;
    this.myShrimps = [];
    this.yarnBalls = [];
    this.shrimp;
    this.shrimp2;
    this.yarn;
    this.yarn2;
  }
  startGame() {
    this.cat = new Cat();
    this.box = new Box();
    this.shrimp = new Shrimp(90, 30);
    this.shrimp2 = new Shrimp(30, 510);
    this.shrimp3 = new Shrimp(330, 150);
    this.yarn = new Yarn(90, 330);
    this.yarn2 = new Yarn(300, 390);
    this.yarn3 = new Yarn(510, 30);

    this.myShrimps.push(this.shrimp);
    this.myShrimps.push(this.shrimp2);
    this.myShrimps.push(this.shrimp3);
  
    this.yarnBalls.push(this.yarn);
    this.yarnBalls.push(this.yarn2);
    this.yarnBalls.push(this.yarn3);

    myCountdown = setInterval(counting, 1000);

    this.ctx.fillStyle = "#F7B500";
    this.ctx.fillRect(325, 240, 45, 30);
    this.ctx.fillRect(300, 510, 30, 30);    
  
    this.cat.loadImg(); 
    this.box.loadImg();
    this.myShrimps.map(i => i.loadImg());
    this.yarnBalls.map(i => i.loadImg());
  }
  updateCanvas() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Closing gaps
    this.ctx.fillStyle = "#F7B500";
    this.ctx.fillRect(325, 240, 45, 30);
    this.ctx.fillRect(300, 510, 30, 30); 
  
    this.cat.draw(); 
    this.box.draw();
    this.myShrimps.map(i => i.draw());
    this.yarnBalls.map(i => i.draw());
  }
  winner() {
    return this.cat.x === this.box.x && this.cat.y === this.box.y;
  }
}