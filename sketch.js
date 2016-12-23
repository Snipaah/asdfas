var burbu = [];
var poto;


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  for (var i = 0; i < 200; i++) {
      burbu[i] = {
       x: random(0, windowWidth),
       y: random(0, windowHeight),
       display: function() {
          stroke(255);
          fill(random(0, 255), random(0, 255), random(0,255));
          text("Hehexd", this.x, this.y, random(45, 50), random(45, 50));
       },
       
       move: function() {
          this.x = this.x + random(-1, 1);
          this.y = this.y + random(-1, 1);
            
       }
  }
 }
}

function draw() {
  background(0);
  for (var i = 0; i < burbu.length; i++) {
     burbu[i].display();
     burbu[i].move();
  }
 }
