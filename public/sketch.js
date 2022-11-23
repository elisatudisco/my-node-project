let myColor;
let colors = ["red", "green", "yellow", "orange"];
let clientSocket = io(); //load the library

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(newSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse)

function otherMouse(dataReceived) {
  fill(dataReceived.color);
  circle(dataReceived.x, dataReceived.y, 10);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    color: myColor,
  };

  clientSocket.emit("mouse", message)
}

function setup() {
  createCanvas(400, 400);
  myColor = random(colors);
}

function draw() {
  fill(myColor);
  circle(mouseX, mouseY, 20);
}
