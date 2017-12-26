// Here's the game code

var socket;
var socketlocation = 'http://localhost:1337';

function setup() {

  createCanvas(640,480);
  background(51);
  // Connect to the socket
  socket = io.connect(socketlocation);
  socket.on('mouse', drawnew);
}

function drawnew (data) {
  noStroke();
  fill(123,123,123);
  ellipse(data.x, data.y, 15, 15);
}

function mouseDragged() {
  console.log('MouseXY', mouseX, mouseY);
  if (mouseButton==='left') {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY,50,50);
    var sendData = {
      x:mouseX,
      y:mouseY
    };
    socket.emit('mouse', sendData);
  }
}

function draw() {
}
