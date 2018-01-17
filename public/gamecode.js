// Here's the game code

var socket;
var socketlocation = 'http://localhost:1337';

function setup() {

  createCanvas(720,480);
  background(51);
  drawBackground(0);
  // Connect to the socket
  socket = io.connect(socketlocation);
  socket.on('mouse', drawnew);
}

function drawBackground(btype) {
  noStroke();
  //      BackgroundSky, BackgroundGround, MainGround, MainUnderGround
  let colors1= ['#FCFF89', '#FE7187', '#CA4B7C', '#6E386E'];
  let colorsS= ['#A3F7BF', '#29A19C', '#4B6289', '#60316E'];
  var colors = colors1.reverse();
  var bgPerc = [41,75,88,100].reverse();
  colors.forEach((e, i) => {
    fill(e);
    let bgheight = height/100*bgPerc[i];
    console.log(bgheight, width, height);
    rect(0,0, width, bgheight);
  })
}

function drawnew (data) {
  noStroke();
  fill('#121212');
  ellipse(data.x, data.y, 15, 15);
}

function mouseDragged() {
  console.log('MouseXY', mouseX, mouseY);
  if (mouseButton==='left') {
    noStroke();
    fill('#121212');
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
