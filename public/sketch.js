let clientSocket = io(); //attivare la libreria linkata in index.html
let myColor; 
let colors = ["red", "green", "blue", "yellow", "orange"]

clientSocket.on("connect", newConnection);

function newConnection() {
  console.log(clientSocket.id)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = random(colors);
}

function draw() {
  fill(myColor)
  circle(mouseX, mouseY, 30);
}

function mouseMoved() {  
  let message = {     //crea un oggetto
    x: mouseX,
    y: mouseY,
    c: myColor,
    id: clientSocket.id,
  }

  clientSocket.emit("mouse", message); // "nome del messaggio che voglio mandare", contenuto del messaggio 
}

clientSocket.on("mouseBroadcast", otherMouse); //quando ricevi "mouseBroadcast", chiama funzione otherMouse

function otherMouse(dataRecieved) {
  fill(dataRecieved.c);
  circle(dataRecieved.x, dataRecieved.y, 30)
}