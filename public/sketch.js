//load the library
let clientSocket = io();

clientSocket.on("connect", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 20);
}
