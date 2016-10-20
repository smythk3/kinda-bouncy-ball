var x = 12.5;
var xspeed = 10
var yspeed = 5


var y = 10;



function setup() {
  createCanvas(800,500);
  
  
}

function draw() {
  background(255);
  // we need a ball
  //the ball needs a colour
  fill(125);
  ellipse(x, y, 25, 25 );
  // the ball needs to move
  // this means we need to increment x
  
  x = x + xspeed;
  y = y + yspeed;
  
  if(x > 480 || x < 12.5) {
    
    xspeed = -xspeed
  }
  
  
  if(y > 790 || y < 12.5) {
    
   yspeed = -yspeed;
  }
  
  
  
  //if the x value goes over 800, change the variable x
  
  
}