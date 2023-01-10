let express = require("express"); //load the express library

let app = express(); //activte express and put it in a variable called app

let port = process.env.PORT || 3000; //porta del server per comunicare

let server = app.listen(port) //listen = wait for imput from (port)

app.use(express.static("public")); //magic line che collega server e client

console.log('running server on http://localhost:' + port);

let serverSocket = require("socket.io"); //istanza del socket per il lato server

let io = serverSocket(server) //imput output = connessione tra il server e il socket




io.on("connection", newConnection); //when a new user connects, call a the funtion newConnection

function newConnection(newSocket){  //neSocket è una variabile che conterrà le informazioni da passare al server al momento della connesione
    console.log(newSocket.id);

    newSocket.on("mouse", mouseRecieved);  //quando riceve "mouse" dal client, chiama mousRecieved 

    function mouseRecieved(dataRecieved) { //massa il contenuto di "mouse" nella variabile dataREcieved
        console.log(dataRecieved);
    
        newSocket.broadcast.emit("mouseBroadcast", dataRecieved) //manda il messaggio a tutti i client che non sono quello attuale
    }
}

