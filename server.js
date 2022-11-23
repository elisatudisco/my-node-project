console.log("script loaded");

let express = require("express");

let app = express();

let port = 3000;

let server = app.listen(port); //listening to a specific port

app.use(express.static("public")); //use this folder (public)

console.log('running server on http://localhost:' + port);

let serverSocket = require('socket.io');

let io = serverSocket(server); //connection point between server service and clients

//socket io cheatsheet https://socket.io/docs/v3/emit-cheatsheet/ version 4
io.on("connection", newConnection);

//we expect one parameter, pass a new information during the connection
//when the pc is connect to our service, print out a line of code
function newConnection(newSocket) {
    console.log(newSocket);
}

