var particles = [];
var numParticles = 20;

function setup() {
  createCanvas(window.innerWidth-20, window.innerHeight-20); //createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(1);
  stroke(255,125);
  fill(255,125);
  
  
  for (var k=0; k<numParticles; k++) {
    particles[k] = new Particle();
  }
  frameRate(15); // Limit framerate for cross-device consistency

}

function draw() {
  background(0,0);
  clear();
  
  for (var k=0; k<numParticles; k++) {
    particles[k].display();
    particles[k].move(); 
    // Draw line to mouse
    d = distance(particles[k].x,particles[k].y, mouseX, mouseY);
    if (d < 200 && d > 100) {
      // Distance
      line(particles[k].x,particles[k].y, mouseX, mouseY);
      var tString = nf(d,0,2);
      text(tString, (particles[k].x+mouseX)/2, (particles[k].y+mouseY)/2);  
      // Angle
      // noFill();
      // var angle = atan( abs(particles[k].y-mouseY)/abs(particles[k].x-mouseX) );
      // console.log(angle);
      // arc(mouseX, mouseY, d/2, d/2, 0, angle); // lower quarter circle 
      // fill(255,125);      
      
    }
    
  }
}

function distance(x1,y1, x2,y2) {
  return sqrt( pow(x1-x2,2) + pow(y1-y2,2) );
}

function Particle(index) {
  this.x = random(width);
  this.y = random(height);
  this.velX = random(-2,2);
  this.velY = random(-2,2);
  this.diameter = 5;
  this.c = color(255); 
  
  
  this.display = function() {
    fill(this.c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
  this.move = function() {
    this.x  = this.x + this.velX;
    this.y  = this.y + this.velY;
    
    if (this.x < 0 || this.x > width) {
      this.x = constrain(this.x, 0, width);
      this.velX = -1 * this.velX;
    }
    if (this.y < 0 || this.y > height) {
      this.y = constrain(this.y, 0, width);
      this.velY = -1 * this.velY;
    }
  }
}