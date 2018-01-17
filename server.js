// Express server
var express = require('express');
var app     = express();
var server  = app.listen(1337, () => console.log('Server on'));

// Socket
var socket = require('socket.io');
var io     = socket(server);

// Access to public folder
app.use(express.static('public'));

// Sockets
io.sockets.on('connection', newConnection);

// Socket functions
function newConnection (sock) {
  console.log('new Connection:',sock.id);
  sock.on('mouse', mouseData);
  function mouseData(d) {
    console.log(d);
    sock.broadcast.emit('mouse', d);
  }
}


// Main Welcome page
app.get('/', function(req, res) {
  console.log('Main page requested');
  //res.send("Welcome to the game's main page");
  //res.end()
  res.sendFile('welcome.html');
});
