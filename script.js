var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 20;
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 1, myBall_yVel = 0;
var myBall

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(color(0, 0, 0));
  rectMode (CENTER);
  myBall = rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
  console.log(myBall);
}

function draw() {
  background(color(0, 0, 100));
  myBall_xPos = myBall_xPos + myBall_xVel;
  if (myBall_xPos > canvasWidth){
      myBall_xVel = -1;
  } else if (myBall_xPos < 0) {
      myBall_xVel = -1;
  }
  myBall_yPos = myBall_yPos + myBall_yVel;
  if (myBall_yPos > canvasWidth){
      myBall_yVel = -1;
  } else if (myBall_yPos < 0) {
      myBall_yVel = -1;
  }

  rect(myBall_xPos,myBall_yPos,ballSize,ballSize);

}