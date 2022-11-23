let clientSocket = io(); //attivare la libreria linkata in index.html

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id)
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  circle(mouseX, mouseY, 30)
}
